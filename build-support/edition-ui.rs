// SPDX-License-Identifier: MIT
// Shared by Cargo embedding and DBX staging; no frontend runtime is required.
use std::{fs, io, path::Path};

pub fn render(source: &str, full: bool) -> io::Result<String> {
    let mut output = String::new();
    let mut in_full = false;
    for line in source.split_inclusive('\n') {
        match line.trim() {
            "// edition:full" | "<!-- edition:full -->" => {
                if in_full {
                    return Err(io::Error::other("nested edition block"));
                }
                in_full = true;
            }
            "// edition:end" | "<!-- edition:end -->" => {
                if !in_full {
                    return Err(io::Error::other("unmatched edition end"));
                }
                in_full = false;
            }
            _ if full || !in_full => output.push_str(line),
            _ => {}
        }
    }
    if in_full {
        return Err(io::Error::other("unterminated edition block"));
    }
    Ok(output)
}

pub fn generate(source: &Path, dest: &Path, full: bool) -> io::Result<()> {
    fs::create_dir_all(dest)?;
    for entry in fs::read_dir(source)? {
        let entry = entry?;
        let name = entry.file_name();
        let name = name.to_string_lossy();
        if !full
            && matches!(
                name.as_ref(),
                "online-login.js" | "qrcode.js" | "platform-icons"
            )
        {
            continue;
        }
        let input = entry.path();
        let output = dest.join(name.as_ref());
        if input.is_dir() {
            generate(&input, &output, full)?;
        } else if matches!(
            input.extension().and_then(|s| s.to_str()),
            Some("html" | "js" | "css")
        ) {
            fs::write(output, render(&fs::read_to_string(input)?, full)?)?;
        } else {
            fs::copy(input, output)?;
        }
    }
    Ok(())
}

// Also compiled directly with rustc by the plugin packaging script.
#[allow(dead_code)]
fn main() -> io::Result<()> {
    let args: Vec<_> = std::env::args().collect();
    if args.len() != 4 || !matches!(args[3].as_str(), "standard" | "full") {
        return Err(io::Error::other(
            "usage: edition-ui SOURCE DEST standard|full",
        ));
    }
    generate(Path::new(&args[1]), Path::new(&args[2]), args[3] == "full")
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn removes_full_blocks_and_rejects_bad_markers() {
        let src = "shared\n// edition:full\nplatform\n// edition:end\nend\n";
        assert_eq!(render(src, false).unwrap(), "shared\nend\n");
        assert_eq!(render(src, true).unwrap(), "shared\nplatform\nend\n");
        assert!(render("// edition:full\n", false).is_err());
        assert!(render("// edition:end\n", true).is_err());
    }
}

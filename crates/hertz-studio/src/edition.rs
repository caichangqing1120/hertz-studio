// SPDX-License-Identifier: MIT
//! Compile-time distribution identity. Full must always be explicitly enabled.

pub const FULL: bool = cfg!(feature = "full");
pub const NAME: &str = if FULL { "full" } else { "standard" };
pub const PLUGIN_ID: &str = if FULL {
    "io.github.oncemisery.hertz-studio.full"
} else {
    "io.github.oncemisery.hertz-studio"
};
// Existing installations contain platform credentials and belong to Full.
pub const DATA_DIR: &str = if FULL {
    "hertz-studio"
} else {
    "hertz-studio-standard"
};

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn identities_are_distinct_and_full_is_explicit() {
        assert_eq!(FULL, cfg!(feature = "full"));
        assert_eq!(PLUGIN_ID.ends_with(".full"), FULL);
        assert_eq!(DATA_DIR == "hertz-studio", FULL);
    }
}

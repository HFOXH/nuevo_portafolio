export const SUPPORTED_LANGS = ["es", "en", "fr", "de"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const DEFAULT_LANG: Lang = "es";

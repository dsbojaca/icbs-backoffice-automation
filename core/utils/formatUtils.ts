export const FormatUtils = {
  normalize(text: string) {
    return text.trim().replace(/\s+/g, " ");
  },

  toUpper(text: string) {
    return text.toUpperCase();
  },

  toLower(text: string) {
    return text.toLowerCase();
  },
};


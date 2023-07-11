import type { Preview } from "@storybook/react";
import i18n from "./i18next";

const preview: Preview = {
  globals: {
    locale: "en",
    locales: {
      en: "English",
      ja: "日本語",
    },
  },
  parameters: {
    i18n,
  },
};

export default preview;

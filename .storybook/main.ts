import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-react-i18next",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};
export default config;

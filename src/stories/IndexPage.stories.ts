import IndexPage from "../pages/index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IndexPage> = {
  title: "IndexPage",
  component: IndexPage,
};

export default meta;
type Story = StoryObj<typeof IndexPage>;

export const Default: Story = {};

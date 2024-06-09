import { Buttom } from ".";

export default {
  title: "Components/Buttom",
  component: Buttom,
  argTypes: {
    property1: {
      options: ["pressing", "UP", "DOWN", "variant-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "pressing",
    pressing: true,
    className: {},
  },
};

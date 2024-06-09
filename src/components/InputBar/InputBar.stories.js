import { InputBar } from ".";

export default {
  title: "Components/InputBar",
  component: InputBar,
  argTypes: {
    property1: {
      options: ["zero", "wrong", "amount-0"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "zero",
    className: {},
  },
};

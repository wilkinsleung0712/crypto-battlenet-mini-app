import { Status } from ".";

export default {
  title: "Components/Status",
  component: Status,
  argTypes: {
    property1: {
      options: ["live", "next"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "live",
    className: {},
    text: "Live #000234",
  },
};

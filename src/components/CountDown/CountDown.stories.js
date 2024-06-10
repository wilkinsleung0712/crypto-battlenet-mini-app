import { CountDown } from ".";

export default {
  title: "Components/CountDown",
  component: CountDown,
  argTypes: {
    property1: {
      options: ["sixty-s", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "sixty-s",
    className: {},
    frameClassName: {},
    union: "https://cdn.animaapp.com/projects/66641dbc59e6661189d283f3/releases/66641de4dc5f7759f1404660/img/union.svg",
  },
};

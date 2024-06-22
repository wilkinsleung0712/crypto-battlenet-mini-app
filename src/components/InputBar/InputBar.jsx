import React, { useEffect } from "react";
import "./style.css";
import { Slider } from "../Slider";
import { useSnapshot } from "valtio";
import { mainManager, setAmount } from "../../models/main";

export const InputBar = ({ property1 }) => {
  const { amount, maxAmount } = useSnapshot(mainManager);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setAmount(value);
  };

  const handleSliderChange = (values) => {
    setAmount(values?.[0] ?? 50);
  };

  const handleMaxClick = () => {
    handleSliderChange([maxAmount]); // Replace with your MAX value
  };

  useEffect(() => {
    console.log("now the amount is: ", amount);
  }, [amount]);

  return (
    <div
      className={
        "w-full flex flex-col gap-2 justify-center relative items-start"
      }
    >
      <div className="w-full flex relative flex-col gap-2">
        <section className="w-full flex items-center justify-between px-2.5">
          <div className="text-grey text-xs">Enter an amount</div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-grey">My Prediction:</span>
            <div className="text-xs text-white font-medium">
              {property1 === "zero" && <>None</>}
              {["amount-0", "wrong"].includes(property1) && <>{maxAmount} UP</>}
            </div>
          </div>
        </section>
        <div className="flex h-[50px] w-full items-center rounded-[10px] border border-solid border-white/30 bg-black focus-within:border-blue">
          <input
            type="number"
            value={amount}
            max={maxAmount}
            step={1}
            onChange={handleInputChange}
            className="h-full w-full rounded bg-transparent font-bold px-3.5 text-xl text-white outline-none transition-colors duration-150 ease-linear disabled:cursor-not-allowed disabled:text-grey disabled:placeholder:text-grey border-transparent"
          />
          <div
            className="font-regular font-semibold text-sm text-blue inline-flex h-full shrink-0 select-none items-center justify-center bg-grey-light px-3.5 rounded-r"
            onClick={handleMaxClick}
          >
            MAX
          </div>
        </div>
      </div>
      <Slider
        max={maxAmount}
        onValueChange={handleSliderChange}
        value={amount}
      />
    </div>
  );
};

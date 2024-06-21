import React, { useEffect, useState, useRef } from "react";
import { InputBar } from "../InputBar";

export const PrizePool = () => {
  return (
    <div className="w-full px-2.5 bg-black/20 rounded-15 px-2.5">
      <header className="p-2.5 grid gap-2.5">
        <div className="flex items-center">
          {/* next container */}
          <div className="">
            <div>Next</div>
          </div>
        </div>
        <div>{/* prize pool image */}</div>
        <InputBar property1="amount-0" />
      </header>
    </div>
  );
};

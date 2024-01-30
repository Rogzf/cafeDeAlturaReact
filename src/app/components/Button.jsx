import React from "react";
import { cva } from "class-variance-authority";

const ButtonVariants = cva(
  /* button base style */
  "h-auto text-white transition-colors duration-150",
  {
    variants: {
      /* button colors */
      intent: {
        primary: "bg-[#2A5B45B2] group-hover/cardCoffe:bg-[#2A5B45]",
        agotado:
          "bg-[#CEC6BB]",
        secondary: "bg-[#1F1815]",
        grey: "bg-[#515051]",
        default: "bg-[#2A5B45]",
        transparent: "bg-transparent text-[#2A5B45B2]",
      },

      /* button sizes */
      size: {
        small: ["text-[14px]", "py-[8px]", "px-[8px]"],
        medium: ["text-[14px]", "py-[12px]", "px-[24px]"],
        large: ["text-[14px]", "py-[12px]", "px-[24px]", "w-min"],
      },

      /* button roundness */
      roundness: {
        square: "rounded-[4px]",
        round: "rounded-[4px]",
        pill: "rounded-full",
      },

      textColor: {
        verde: ["text-[#2A5B45]"],
      },
    },

    // defaults
    defaultVariants: {
      intent: "default",
      size: "medium",
      roundness: "round",
    },
  }
);

export const Button = ({ intent, size, roundness, text, children }) => {
  return (
    <button className={ButtonVariants({ intent, size, roundness, text })}>
      {children}
    </button>
  );
};

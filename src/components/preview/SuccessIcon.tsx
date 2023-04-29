import { ComponentPropsWithoutRef } from "react";
import { cn } from "@utils/cn";

export const SuccessIcon = (props: ComponentPropsWithoutRef<"svg">) => {
  const { className, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cn("h-5 w-5", className)}
      {...otherProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

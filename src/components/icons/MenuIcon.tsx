import { cn } from "@utils/cn";

export const MenuIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  const { className, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cn("h-6 w-6", className)}
      {...otherProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  );
};

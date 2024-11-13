import { cn } from "@/lib/utils";
import React from "react";
import { ElementType } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  icon: ElementType;
  linkTo: string;
  focus?: boolean;
}

const MenuItem = React.forwardRef<HTMLInputElement, MenuItemProps>(
  ({ text, icon: Icon, linkTo, focus, className, ...props }, ref) => {
    const navigate = useNavigate();

    return (
      <div
        ref={ref}
        {...props}
        onClick={() => navigate(linkTo)}
        className={cn(
          `w-full h-14 ${
            focus ? "bg-primary text-white" : "bg-white text-black"
          } rounded-xl flex items-center justify-center lg:justify-between xs:px-6 hover:cursor-pointer hover:bg-primary/40`,
          className
        )}
      >
        <h2 className="text-xl font-bold hidden lg:block">{text}</h2>
        <span className="text-4xl">
          <Icon />
        </span>
      </div>
    );
  }
);

export default MenuItem;

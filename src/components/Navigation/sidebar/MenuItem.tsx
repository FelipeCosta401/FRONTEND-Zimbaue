import { ElementType } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  text: string;
  icon: ElementType;
  linkTo: string;
  focus?: boolean;
}

const MenuItem = ({ text, icon: Icon, linkTo, focus }: MenuItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(linkTo)}
      className={`w-full h-14 ${
        focus ? "bg-primary text-white" : "bg-white text-black"
      } rounded-xl flex items-center justify-center lg:justify-between xs:px-6 hover:cursor-pointer hover:bg-primary/40`}
    >
      <h2 className="text-xl font-bold hidden lg:block">{text}</h2>
      <span className="text-4xl">
        <Icon />
      </span>
    </div>
  );
};

export default MenuItem;

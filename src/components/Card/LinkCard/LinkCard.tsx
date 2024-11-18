import { ElementType, forwardRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface LinkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  icon: ElementType;
  linkTo: string;
}

const LinkCard = forwardRef<HTMLDivElement, LinkCardProps>(
  ({ text, icon: Icon, linkTo, className }, ref) => (
    <Link to={linkTo} className={className}>
      <Card
        ref={ref}
        className="hover:bg-primary/20 hover:cursor-pointer"
      >
        <CardContent className="flex flex-col xs:flex-row items-center justify-center gap-4">
          <Icon className="text-xl xl:text-4xl" />
          <CardTitle className="text-lg xl:text-2xl">{text}</CardTitle>
        </CardContent>
      </Card>
    </Link>
  )
);

export default LinkCard;

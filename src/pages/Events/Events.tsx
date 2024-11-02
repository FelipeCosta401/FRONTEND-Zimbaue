import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { IoCalendarSharp } from "react-icons/io5";

const Events = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-slate-800 text-3xl font-bold">Eventos</h1>
      <Card>
        <CardContent className="flex justify-between">
          <div className="w-[25%] flex gap-2">
            <span className="bg-primary/60 flex justify-center items-center w-24 h-24 rounded-full">
              <IoCalendarSharp size={45} className="text-primary-foreground" />
            </span>
            <span className="block">
              <p className="text-lg font-medium">Total de eventos</p>
              <h3 className="text-4xl font-semibold">54</h3>
            </span>
          </div>
          <Separator orientation="vertical"/>
          <div className="w-[25%] flex gap-2">
            <span className="bg-primary/60 flex justify-center items-center w-24 h-24 rounded-full">
              <IoCalendarSharp size={45} className="text-primary-foreground" />
            </span>
            <span className="block">
              <p className="text-lg font-medium">Total de eventos</p>
              <h3 className="text-4xl font-semibold">54</h3>
            </span>
          </div>
          <Separator orientation="vertical"/>
          <div className="w-[25%] flex gap-2">
            <span className="bg-primary/60 flex justify-center items-center w-24 h-24 rounded-full">
              <IoCalendarSharp size={45} className="text-primary-foreground" />
            </span>
            <span className="block">
              <p className="text-lg font-medium">Total de eventos</p>
              <h3 className="text-4xl font-semibold">54</h3>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;

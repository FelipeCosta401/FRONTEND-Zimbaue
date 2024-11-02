import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { IoCalendarSharp } from "react-icons/io5";

import image from "../../Assets/image1.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Events = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-slate-800 text-3xl font-bold">Eventos</h1>
      <header>
        <Card>
          <CardContent className="flex justify-between">
            <div className="w-[25%] flex gap-2">
              <span className="bg-primary/60 flex justify-center items-center w-24 h-24 rounded-full">
                <IoCalendarSharp
                  size={45}
                  className="text-primary-foreground"
                />
              </span>
              <span className="block">
                <p className="text-lg font-medium">Total de eventos</p>
                <h3 className="text-4xl font-semibold">54</h3>
              </span>
            </div>
            <Separator orientation="vertical" />
            <div className="w-[25%] flex gap-2">
              <span className="bg-primary/60 flex justify-center items-center w-24 h-24 rounded-full">
                <IoCalendarSharp
                  size={45}
                  className="text-primary-foreground"
                />
              </span>
              <span className="block">
                <p className="text-lg font-medium">Em andamento</p>
                <h3 className="text-4xl font-semibold">54</h3>
              </span>
            </div>
            <Separator orientation="vertical" />
            <div className="w-[25%] flex gap-2">
              <span className="bg-primary/60 flex justify-center items-center w-24 h-24 rounded-full">
                <IoCalendarSharp
                  size={45}
                  className="text-primary-foreground"
                />
              </span>
              <span className="block">
                <p className="text-lg font-medium">Total de eventos</p>
                <h3 className="text-4xl font-semibold">54</h3>
              </span>
            </div>
          </CardContent>
        </Card>
      </header>
      <main className="h-[350px]">
        <Carousel className="h-full">
          <CarouselContent>
            {Array.from({ length: 6 }).map(() => (
              <CarouselItem className="basis-[40%]">
                <Card className="h-[350px] w-[450px]">
                  <CardHeader
                    className="h-1/2 rounded-lg m-2"
                    style={{
                      background: `url(${image}) no-repeat center center / cover`,
                    }}
                  />
                  <CardContent>
                    <CardTitle>Nome do evento</CardTitle>
                    <CardDescription>Descricao do evento</CardDescription>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button type="button" variant={"outline"}>
                      Saiba mais sobre
                    </Button>
                    <Button type="button">Participar</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>
    </div>
  );
};

export default Events;

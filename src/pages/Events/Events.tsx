import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { IoCalendarSharp } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdLogin } from "react-icons/md";

import image from "../../Assets/image1.png";

const Events = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-slate-800 text-3xl font-bold">Eventos</h1>
      <header>
        <Card>
          <CardContent className="flex flex-col gap-4 sm:flex-row px-2 py-6 xl:px-6">
            <div className="w-full sm:w-1/3 flex gap-2 items-center sm:border-r-2 ">
              <span className="bg-primary/60 flex justify-center items-center rounded-full w-16 h-16 xl:w-24 xl:h-24 ">
                <IoCalendarSharp                  
                  className="text-primary-foreground text-3xl xl:text-5xl "
                />
              </span>
              <span className="block">
                <p className="text-lg font-medium">Total de eventos</p>
                <h3 className="text-xl xl:text-2xl font-semibold">54</h3>
              </span>
            </div>
            <div className="w-full sm:w-1/3 flex gap-2 items-center sm:border-r-2 ">
              <span className="bg-primary/60 flex justify-center items-center rounded-full w-16 h-16 xl:w-24 xl:h-24 ">
                <IoCalendarSharp                  
                  className="text-primary-foreground text-3xl xl:text-5xl "
                />
              </span>
              <span className="block">
                <p className="text-lg font-medium">Em andamento</p>
                <h3 className="text-xl xl:text-2xl font-semibold">54</h3>
              </span>
            </div>
            <div className="w-full sm:w-1/3 flex gap-2 items-center">
              <span className="bg-primary/60 flex justify-center items-center rounded-full w-16 h-16 xl:w-24 xl:h-24 ">
                <IoCalendarSharp                  
                  className="text-primary-foreground text-3xl xl:text-5xl "
                />
              </span>
              <span className="block">
                <p className="text-lg font-medium">Total de eventos</p>
                <h3 className="text-xl xl:text-2xl font-semibold">54</h3>
              </span>
            </div>
          </CardContent>
        </Card>
      </header>
      <main className="h-[350px]">
        <Carousel className="h-full">
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, i) => (
              <CarouselItem className="basis-[72%] xl:basis-[42%]" key={i+1}>
                <Card className="h-[350px] w-full">
                  <CardHeader
                    className="h-1/2 rounded-lg m-2"
                    style={{
                      background: `url(${image}) no-repeat center center / cover`,
                    }}
                  />
                  <CardContent>
                    <CardTitle className="text-xl sm:text-2xl">Nome do evento</CardTitle>
                    <CardDescription>Descricao do evento</CardDescription>
                  </CardContent>
                  <CardFooter className="px-2 pb-4 gap-2">
                    <Button type="button" variant={"outline"} className="w-1/2">
                    <IoMdInformationCircleOutline />
                      <p className="hidden xs:block">Saiba mais</p>
                    </Button>
                    <Button type="button" className="w-1/2">
                    <MdLogin/>  
                      <p className="hidden xs:block">Participar</p>
                    </Button>
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

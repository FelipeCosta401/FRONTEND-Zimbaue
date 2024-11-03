import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";
import image4 from "../../Assets/image4.png";
import image5 from "../../Assets/image5.png";

const Home = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <main className="space-y-4">
      <h1 className="text-slate-800 text-3xl font-bold">Novidades</h1>
      <section className="py-4 sm:columns-2 gap-4 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card className="break-inside-avoid" key={i + 1}>
            <CardHeader>
              <CardTitle>Publicação</CardTitle>
              <CardDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                provident explicabo, quis veritatis est id facere consequatur
                totam neque, molestias consequuntur perferendis architecto iste
                natus modi aliquid distinctio. Quas, tempora.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="w-full h-[300px] rounded-lg"
                style={{
                  background: `url(${images[i]}) no-repeat center center / cover`,
                }}
              ></div>
            </CardContent>
            <CardFooter>
              <Button type="button" variant={"outline"}>
                Ver publicação
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default Home;

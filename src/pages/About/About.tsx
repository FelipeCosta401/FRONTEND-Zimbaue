import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import zimbaueProfile from "../../Assets/profile.png";

import { FaFacebook, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="space-y-4">
        <section className="flex gap-4">
          <Card className="w-3/4">
            <CardHeader className="">
              <CardTitle className="text-slate-800 font-bold text-3xl">
                Sobre nós
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src={zimbaueProfile} />
              </Avatar>
              <CardDescription className="text-xl">
                Sociedade civil de ativismo social sem fins lucrativos que atua
                em Assis e região no combate a discriminação, racismo e a
                intolerância, além de estimular o desenvolvimento social e
                cultural por meio de práticas educacionais e políticas.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-1/4">
            <CardHeader>
              <CardTitle>Redes sociais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                type="button"
                className="w-full h-12 flex items-center justify-center"
                variant={"outline"}
              >
                <FaInstagram />
                Facebook
              </Button>
              <Button
                type="button"
                className="w-full h-12 flex items-center justify-center"
                variant={"outline"}
              >
                <FaFacebook color="blue" />
                Facebook
              </Button>
            </CardContent>
          </Card>
        </section>
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Nossa história</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xl">
                Nossa história começou a alguns anos, quando Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Aut expedita cum
                reprehenderit officiis animi, esse saepe excepturi dolorum,
                facere numquam sequi, distinctio quam nesciunt! Explicabo soluta
                deserunt provident doloribus reprehenderit?
              </CardDescription>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default About;

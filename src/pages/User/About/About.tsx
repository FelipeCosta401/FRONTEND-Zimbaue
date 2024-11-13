import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import zimbaueProfile from "../../../Assets/profile.png";

import { FaFacebook, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="space-y-4">
        <section className="flex flex-col xl:flex-row gap-4">
          <Card className="w-full xl:w-3/4">
            <CardHeader className="flex-row items-center gap-4">
              <Avatar className="block sm:hidden w-20 h-20 xs:w-28 xs:h-28">
                <AvatarImage src={zimbaueProfile} />
              </Avatar>
              <CardTitle className="text-slate-800 font-bold text-3xl">
                Sobre nós
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Avatar className="hidden sm:block w-32 h-32">
                <AvatarImage src={zimbaueProfile} />
              </Avatar>
              <CardDescription className="text-xl">
                O Instituto do Negro Zimbauê é uma organização não governamental
                que tem como objetivo o combate à discriminação, ao racismo e à
                intolerância, além da promoção da igualdade racial em todos os
                segmentos. O Instituto visa, também, a divulgação, a promoção, o
                ensino, a prática, a tradição da cultura afro em todos os seus
                aspectos e variantes. O Zimbauê é uma instituição sem fins
                lucrativos, que, há 20 anos, tem auxiliado o município de Assis
                e região no processo de eliminar a discriminação racial,
                desenvolvendo atividades que buscam a reconstrução da identidade
                étnica, da autoestima e cidadania dos afro-brasileiros em um
                contexto de formação política e educacional.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full xl:w-1/4">
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

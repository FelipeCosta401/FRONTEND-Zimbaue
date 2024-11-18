import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Awards = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const textos = [
    "20 anos de Instituto do Negro Zimbaue em Assis",
    "20 anos de resistência anti-racista no interior profundo",
    "20 anos adentrando espaços institucionais e reais do nosso povo preto e dos nossos aliados",
    "20 anos de muita luta e resistência! Contribua como pode!",
  ];

  return (
    <main className="space-y-4">
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Nossas premiações</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              A Instituição Negro Zimbaue, ao longo de seus 20 anos de atuação,
              consolidou-se como uma referência em projetos sociais e
              iniciativas de impacto. Ao longo desse período, a instituição foi
              agraciada com diversos prêmios que contribuíram para ampliar sua
              visibilidade e reconhecimento na sociedade. Entre todos os prêmios
              recebidos, destacam-se aqueles que celebram as conquistas mais
              significativas de sua trajetória, ressaltando o comprometimento e
              a dedicação da equipe e dos voluntários em transformar realidades.
              Esses reconhecimentos reforçam a importância do trabalho realizado
              pela instituição e motivam a continuidade de suas ações.
            </CardDescription>
          </CardContent>
        </Card>
      </section>
      <section className="w-full space-y-6">
        <div className="font-bold text-xl text-slate-800 w-1/2">
          <h1>Nossos passos Vem de Longe!</h1>
          <h1>
            Em memória de Kita Amorim, nosso griot, PRESENTE em vida: Hoje E
            Sempre!"
          </h1>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-1/2 ml-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {textos.map((texto, i) => (
              <CarouselItem key={i+1}>
                <Card className="h-24">
                  <CardContent className="flex items-center justify-center">
                    <CardTitle>{texto} . . .</CardTitle>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
};

export default Awards;

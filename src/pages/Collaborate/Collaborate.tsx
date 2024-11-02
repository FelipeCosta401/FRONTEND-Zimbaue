import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Collaborate = () => {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-slate-800 text-3xl font-bold">
          Contribua com a instituição
        </h1>
        <main className="w-full h-[200px] flex gap-4">
          <Card className="h-full w-1/3 flex flex-col justify-between">
            <CardHeader className="h-1/2">
              <CardTitle>Financeiramente</CardTitle>
              <CardDescription>
                Você pode contribuir com uma pequena quantia em dinheiro
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-2">
              <Button type="button" variant={"outline"}>
                Saber mais
              </Button>
              <Button type="button">Contribuir</Button>
            </CardFooter>
          </Card>
          <Card className="h-full w-1/3 flex flex-col justify-between">
            <CardHeader className="h-1/2">
              <CardTitle>Engajamento</CardTitle>
              <CardDescription>
                Você pode nos ajudar compartilhando nosso trabalho
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-2">
              <Button type="button" variant={"outline"}>
                Saber mais
              </Button>
              <Button type="button">Compartilhar</Button>
            </CardFooter>
          </Card>
          <Card className="h-full w-1/3 flex flex-col justify-between">
            <CardHeader className="h-1/2">
              <CardTitle>Doações</CardTitle>
              <CardDescription>
                Você pode contribuir doando roupas, cestas básicas ou objetos em
                bom estado que não te servem mais
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-2">
              <Button type="button" variant={"outline"}>
                Saber mais
              </Button>
              <Button type="button">Doar</Button>
            </CardFooter>
          </Card>
        </main>
        <section>
          <Accordion type="single" collapsible>
            <AccordionItem value="1">
              <AccordionTrigger>Por que contribuir?</AccordionTrigger>
              <AccordionContent>
                Apoiar uma organização sem fins lucrativos que combate o racismo
                é mais do que uma simples doação; é um passo essencial para
                transformar nossa sociedade. Ao contribuir, você se junta a um
                esforço coletivo para promover a igualdade e garantir que todas
                as pessoas, independentemente de sua origem racial, tenham
                acesso justo às oportunidades e recursos que merecem.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>
                Como minha contribuição vai ser utilizada?
              </AccordionTrigger>
              <AccordionContent>
                Nossa organização desempenha um papel vital na educação e
                conscientização, abordando preconceitos e fomentando a
                compreensão intercultural. Seu apoio financeiro nos ajuda a
                expandir essas iniciativas, alcançando mais pessoas e gerando um
                impacto duradouro na forma como a diversidade é percebida e
                valorizada.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>  
      </div>
    </>
  );
};

export default Collaborate;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FinancialCollaborationDialog from "./FinancialCollaborationDialog";
import SharingCollaborationDialog from "./SharingCollaborationDialog";

const Collaborate = () => {
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-slate-800 text-3xl font-bold">
          Contribua com a instituição
        </h1>
        <main className="w-full  space-y-4 sm:columns-2 xl:columns-3">
          <Card className="h-[200px] w-full flex flex-col justify-between break-inside-avoid">
            <CardHeader className="h-1/2">
              <CardTitle>Financeiramente</CardTitle>
              <CardDescription>
                Você pode contribuir com uma pequena quantia em dinheiro
              </CardDescription>
            </CardHeader>
            <CardFooter className="w-2/3 flex gap-2">
              <Button type="button" variant={"outline"}>
                Saber mais
              </Button>
              <FinancialCollaborationDialog />
            </CardFooter>
          </Card>
          <Card className="h-[200px] w-full flex flex-col justify-between break-inside-avoid">
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
              <SharingCollaborationDialog />
            </CardFooter>
          </Card>
          <Card className="h-[200px] w-full flex flex-col justify-between break-inside-avoid">
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
                <Card>
                  <CardContent>
                    <CardDescription>
                      Apoiar uma organização sem fins lucrativos que combate o
                      racismo é mais do que uma simples doação; é um passo
                      essencial para transformar nossa sociedade. Ao contribuir,
                      você se junta a um esforço coletivo para promover a
                      igualdade e garantir que todas as pessoas,
                      independentemente de sua origem racial, tenham acesso
                      justo às oportunidades e recursos que merecem.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2" className="border-none">
              <AccordionTrigger>
                Como minha contribuição vai ser utilizada?
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent>
                    <CardDescription>
                      Nossa organização desempenha um papel vital na educação e
                      conscientização, abordando preconceitos e fomentando a
                      compreensão intercultural. Seu apoio financeiro nos ajuda
                      a expandir essas iniciativas, alcançando mais pessoas e
                      gerando um impacto duradouro na forma como a diversidade é
                      percebida e valorizada.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </>
  );
};

export default Collaborate;

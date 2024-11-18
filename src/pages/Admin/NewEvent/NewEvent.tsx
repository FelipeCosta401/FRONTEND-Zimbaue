import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserContext } from "@/store/UserContext";

import EventService from "@/services/EventService";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

const FormSchema = z.object({
  title: z.string().nonempty("Campo título obrigatório"),
  description: z.string().optional(),
  date: z.date({
    required_error: "Campo data obrigatório",
  }),
});

type FormType = z.infer<typeof FormSchema>;

const eventService = new EventService();

const NewEvent = () => {
  const { user } = useContext(UserContext);
  const form = useForm<FormType>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: zodResolver(FormSchema),
  });

  async function submit(data: FormType) {
    if (!user.id) {
      toast.error("Erro ao cadastrar novo evento");
    } else {
      try {
        const { status } = await eventService.saveEvent(data, user.id);
        status === 201 && toast.success("Evento criado com sucesso");
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        form.setValue("title", "");
        form.setValue("description", "");
      }
    }
  }

  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/FRONTEND-Zimbaue/admin">Admin</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to="#">Novo evento</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>Cadastrar novo evento</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(submit)}>
              <section className="w-full flex justify-between gap-4 flex-col xs:flex-row">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="w-full xs:w-1/2">
                      <FormLabel>Título do evento</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Título do evento..."
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="w-full xs:w-1/2 justify-end flex flex-col">
                      <FormLabel>Data do evento</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Selecione uma data</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição do evento</FormLabel>
                    <Textarea {...field} placeholder="Fale mais sobre..." />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="w-full p-0 flex justify-end">
                <Button className="w-full sm:w-1/3">Cadastrar</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Toaster richColors />
    </div>
  );
};

export default NewEvent;

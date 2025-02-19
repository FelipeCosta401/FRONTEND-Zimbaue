import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { UserContext } from "@/store/UserContext";

import PostService from "@/services/PostService";

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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const FormSchema = z.object({
  title: z.string().nonempty("Campo título obrigatório"),
  description: z.string().optional(),
  link: z.string().optional(),
});

type FormType = z.infer<typeof FormSchema>;

const postService = new PostService();

const NewPost = () => {
  const { user } = useContext(UserContext);
  const form = useForm<FormType>({
    defaultValues: {
      title: "",
      description: "",
      link: "",
    },
    resolver: zodResolver(FormSchema),
  });

  async function submit(data: FormType) {
    if (!user.id) {
      toast.error("Erro ao cadastrar post");
    } else {
      try {
        const { status } = await postService.savePost(data, user.id);
        status === 200 && toast.success("Post cadastrado com sucesso!");
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        form.setValue("title", "");
        form.setValue("description", "");
        form.setValue("link", "");
      }
    }
  }

  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/admin">Admin</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to="#">Nova publicação</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardHeader>
          <CardTitle>Cadastrar nova publicação</CardTitle>
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
                      <FormLabel>Título da publicação</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Título da publicação..."
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="link"
                  render={({ field }) => (
                    <FormItem className="w-full xs:w-1/2">
                      <FormLabel>Link da publicação</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Link âncora..."
                        />
                      </FormControl>
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
                    <FormLabel>Descrição da publicação</FormLabel>
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

export default NewPost;

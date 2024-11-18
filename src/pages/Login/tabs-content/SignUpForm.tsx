import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AuthService from "@/services/AuthService";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

import { IoMdMail, IoMdEye } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { TbLock } from "react-icons/tb";
import { zodResolver } from "@hookform/resolvers/zod";

const authService = new AuthService();

const FormSchema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório!"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(8, {
    message: "A senha deve conter pelo menos 8 caracteres",
  }),
  confirmPassword: z.string().min(8, {
    message: "A senha deve conter pelo menos 8 caracteres",
  }),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    const error = form.formState.errors;

    error.email && toast.error(error.email?.message);
    error.password && toast.error(error.password?.message);
    error.name && toast.error(error.name?.message);
    error.root && toast.error(error.root?.message);
  }, [form.formState.errors]);

  async function register(data: z.infer<typeof FormSchema>) {
    //Verifies if the passwords fields matches
    if (data.password !== data.confirmPassword) {
      form.setError("root", {
        message: "As senhas não condizem",
      });
    } else {
      const reqObj = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: 1,
      };

      try {
        const { status } = await authService.register(reqObj);
        if (status === 201) {
          toast.success("Cadastrado com sucesso!");
          form.setValue("confirmPassword", "");
          form.setValue("password", "");
          form.setValue("email", "");
          form.setValue("name", "");
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        className="w-full xs:w-[80%] h-full m-auto"
        onSubmit={form.handleSubmit(register)}
      >
        <section className="space-y-4 text-primary-foreground">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <FaUser size={25} />
                  <FormLabel className="text-xl text-primary-foreground">
                    Nome
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Insira um nome legal"
                    className={`${
                      form.formState.errors.name &&
                      "focus-visible:outline-red-500"
                    } text-slate-800`}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <IoMdMail size={25} />
                  <FormLabel className="text-xl text-primary-foreground">
                    E-mail
                  </FormLabel>
                </div>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    placeholder="Insira um email válido"
                    className={`${
                      form.formState.errors.email &&
                      "focus-visible:outline-red-500"
                    } text-slate-800`}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <TbLock size={30} />
                  <FormLabel className="text-xl text-primary-foreground">
                    Senha
                  </FormLabel>
                </div>
                <div className="flex gap-2 items-center">
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Escolha uma senha segura"
                      className={`${
                        form.formState.errors.password &&
                        "focus-visible:outline-red-500"
                      } text-slate-800`}
                    />
                  </FormControl>
                  <Button variant={"outline"} type="button">
                    <IoMdEye color="black" />
                  </Button>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <TbLock size={30} />
                  <FormLabel className="text-xl text-primary-foreground">
                    Confirmar senha
                  </FormLabel>
                </div>
                <div className="flex gap-2 items-center">
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Confirme sua senha"
                      className={`${
                        form.formState.errors.confirmPassword &&
                        "focus-visible:outline-red-500"
                      } text-slate-800`}
                    />
                  </FormControl>
                  <Button variant={"outline"} type="button">
                    <IoMdEye color="black" />
                  </Button>
                </div>
              </FormItem>
            )}
          />
        </section>
        <Button className="bg-primary-foreground text-slate-800 mt-10 hover:text-slate-800/80 hover:bg-primary-foreground/80 w-full">
          Cadastrar
        </Button>
      </form>
      <Toaster richColors />
    </Form>
  );
};

export default SignUpForm;

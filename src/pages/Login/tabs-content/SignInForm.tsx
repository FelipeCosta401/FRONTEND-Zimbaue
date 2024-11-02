import { useContext } from "react";
import { UserAuthContext } from "@/store/UserAuthContext";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel  
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { IoMdEye } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { TbLock } from "react-icons/tb";

const FormSchema = z.object({
  name: z.string().nonempty("Preencha o campo de login"),
  password: z.string().nonempty("Preencha o campo da senha").min(8, {
    message: "A senha deve conter pelo menos 8 caracteres",
  }),
});

const SignInForm = () => {
  const { login: loginContextMethod } = useContext(UserAuthContext);
  const navigate = useNavigate();

  //React hook form instance
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  function login(data: z.infer<typeof FormSchema>) {
    loginContextMethod(data);
    navigate("/");
  }

  return (
    <Form {...form}>
      <form
        className="w-full xs:w-[80%] h-full m-auto"
        onSubmit={form.handleSubmit(login)}
      >
        <section className="space-y-4 text-primary-foreground">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <FaUser size={25} />
                  <FormLabel className="text-xl text-primary-foreground" >E-mail / nome</FormLabel>
                </div>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Insira seu email ou nome"
                    className={`${
                      form.formState.errors.name &&
                      "outline-red-500 focus-visible:outline-red-500"
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
                  <FormLabel className="text-xl text-primary-foreground">Senha</FormLabel>
                </div>
                <div className="flex gap-2 items-center">
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Digite sua senha"
                      className={`${
                        form.formState.errors.password &&
                        "outline-red-500 focus-visible:outline-red-500"
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
          Entrar
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;

import SignInForm from "./tabs-content/SignInForm";
import SignUpForm from "./tabs-content/SignUpForm";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  return (
    <main className="w-full mx-auto pt-10 sm:w-[620px]">
      <Tabs defaultValue="sign-in" className="h-[600px]">
        <TabsList className="w-full">
          <TabsTrigger value="sign-in" className="w-1/2">
            Entrar
          </TabsTrigger>
          <TabsTrigger value="sign-up" className="w-1/2">
            Cadastrar
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="sign-in"
          className="h-full p-4 rounded-lg bg-gradient-to-b from-primary to-[#1C1805] space-y-10 shadow-lg"
        >
          <h1 className="font-bold text-3xl text-center text-primary-foreground">
            Entrar
          </h1>
          <SignInForm />
        </TabsContent>
        <TabsContent
          value="sign-up"
          className="h-full p-4 rounded-lg bg-gradient-to-b from-primary to-[#1C1805] space-y-10 shadow-lg"
        >
          <h1 className="font-bold text-3xl text-center text-primary-foreground">
            Cadastre-se
          </h1>
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Login;

import MyAxios from "@/http/MyAxios";
import { UserInterface } from "@/types/UserInterface";

interface registerType {
  name: string;
  role: number;
  email: string;
  password: string;
}

interface loginType {
  email: string;
  password: string;
}

export default class AuthService {
  async register(data: registerType) {
    return await MyAxios.post("/auth/register", data)
      .then((res: { status: number; data: UserInterface }) => {
        const response = res.data;
        const status = res.status;
        return { response, status };
      })
      .catch((e) => {
        const error = e.response.data.message
          ? e.response.data.message
          : "Erro inesperado, estamos trabalhando nisso";
        throw new Error(error);
      });
  }

  async login(data: loginType) {
    return await MyAxios.post("/auth/login", data)
      .then(
        (res: {
          status: number;
          data: { token: string; userDTO: UserInterface };
        }) => {
          const status = res.status;
          const user = res.data.userDTO;
          const token = res.data.token;
          return { user, token, status };
        }
      )
      .catch((e) => {
        const error = e.response.data.message
          ? e.response.data.message
          : "Erro inesperado, estamos trabalhando nisso";
        throw new Error(error);
      });
  }
}

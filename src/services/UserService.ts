import MyAxios from "@/http/MyAxios";
import { UserInterface } from "@/types/UserInterface";

export default class UserService {
  async loadUserList() {
    return await MyAxios.get("/user")
      .then((res: { data: UserInterface[] }) => {
        return res.data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}

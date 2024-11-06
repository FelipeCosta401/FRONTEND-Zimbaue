
import MyAxios from "@/http/MyAxios"

interface registerType {
    name: string,
    role: number,
    email: string,
    password: string
}

export default class AuthService {

    async register(data: registerType){
        return MyAxios.post("/auth/register", data)
            .then((res: any) => console.log(res))
    }

}
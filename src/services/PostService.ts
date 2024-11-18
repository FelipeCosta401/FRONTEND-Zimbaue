import MyAxios from "@/http/MyAxios";
import PostInterface from "@/types/PostInterface";

interface ToSavedPostInterface {
  title: string;
  description?: string;
  link?: string;
}

export default class PostService {
  async loadPostList() {
    return await MyAxios.get("/post").then((res: { data: PostInterface[] }) => {
      const response = res.data;
      return response;
    });
  }

  async savePost(data: ToSavedPostInterface, userId: number) {
    const reqObj = {
      title: data.title,
      description: data.description,
      link: data.link,
      userDTO: {
        id: userId,
      },
    };

    return await MyAxios.post("/post", reqObj)
      .then((res: { status: number; data: PostInterface }) => {
        const response = res.data;
        const status = res.status;
        return { response, status };
      })
      .catch((e) => {
        const error = e.response.data.message;
        throw new Error(error);
      });
  }
}

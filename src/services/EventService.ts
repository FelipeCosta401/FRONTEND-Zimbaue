import MyAxios from "@/http/MyAxios";
import EventInterface from "@/types/EventInterface";

interface ToBeSavedEventInterface {
  title: string;
  description?: string;
  date: Date;
}

export default class EventService {
  async loadAllEvents() {
    return await MyAxios.get("/event").then(
      (res: { data: EventInterface[] }) => {
        const response = res.data;
        return response;
      }
    );
  }

  async saveEvent(data: ToBeSavedEventInterface, userId: number) {
    const reqObj = {
      title: data.title,
      description: data.description,
      date: data.date,
      userDTO: {
        id: userId,
      },
    };

    return await MyAxios.post("/event", reqObj).then(
      (res: { status: number; data: EventInterface }) => {
        const status = res.status;
        const response = res.data;
        return { status, response };
      }
    ).catch((err) => {
      const error = err.response.data.message
      throw new Error(error)
    })
  }
}

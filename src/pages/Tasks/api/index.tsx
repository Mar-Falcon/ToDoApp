import { api } from "../../../utils";

type Payload = {
  title: string;
  description: string;
  state: string;  
};

const saveTaskData = async (data: Payload) => {
  await api.post("/tasks.json", data);
};

export { saveTaskData };
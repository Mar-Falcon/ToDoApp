import { api } from "../../../utils";

type Payload = {
  title: string;
  description: string;
  state: string; 
  startDate: string;
  endDate: string;
};

const saveTaskData = async (data: Payload) => {
  await api.post("/tasks.json", data);
};

export { saveTaskData };
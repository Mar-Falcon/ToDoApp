import { Task } from "../types";
import { api } from "../utils";
import { mapToArray } from "./users";

const getTasks = async () : Promise<Task[]> => {
	const response = await api.get("/tasks.json");
	return mapToArray(response.data);
};

export { getTasks}
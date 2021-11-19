import { api } from "../../../utils"

type Payload = {
    title: string;
    description: string;
    state: string; 
    startDate: string;
    endDate: string;
};

  
const edittask = async (data: Payload) => {
    const param = new URLSearchParams(window.location.search);
    const id = await param.get('id')
    await api.patch(`/tasks/${id}.json`, data);   
}

export { edittask };
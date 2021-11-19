import "./style.scss";

import { FC, FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getSelectedTasks } from "../../api/selectTask";
import { Layout } from "../../components";
import { getParams } from "../../helpers/params";
import { edittask } from "./api";

const defaultValues = {
	title: "",
	description: "",
	state: "", 
  	startDate: "",
  	endDate: "",
}
      
const EditTask: FC =  () => {
      	const { idParams } = getParams()	
	const { push } = useHistory();
	const [tasks, setTasks] = useState(defaultValues)
	 
	useEffect(() => {
	    getSelectedTasks(`${idParams}`).then((response) => {
	      setTasks(response);
	   
	  });
	}, [idParams]);	  
	
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault(); 
		edittask({...tasks});
		push(tasks);
	};
      
	return (
	      <Layout mainClass="edit-task">
		<form onSubmit={handleSubmit}>
		  <div>
		    <label htmlFor="title">Title</label>
		    <input
		      id="title"
		      type="text"
		      name="title"
		      value={tasks?.title}
		      onChange={(e) => {
			setTasks({...tasks, title: e.target.value})
		      }}
		    />
		  </div>    
		  <div>
		    <label htmlFor="description">Description</label>
		    <input
		      id="description"
		      type="text"
		      name="description"
		      value={tasks?.description}
		      onChange={(e) => {
			setTasks({...tasks, description: e.target.value})
		      }}
		    />
		  </div>
	  
		  <div>
		    <label htmlFor="state">Progress</label>
		    <select 
		      id="state"
		      name="state"
		      value={tasks?.state}
		      onChange={(e) => {
			setTasks({...tasks, state: e.target.value})
		      }}
		      required
		    >
		      <option value="" selected>Seleccione Estado</option>
		      <option value="pendiente">Pendiente</option>
		      <option value="enproceso">En Proceso</option>
		      <option value="finalizada">Finalizada</option>
		      <option value="postergada">Postergada</option>
		      <option value="cancelada">Cancelada</option>
		      </select>
		  </div>
      
		  <div>
		    <label htmlFor="startDate">Start Date </label>
		    <input
		      id="startDate"
		      type="date"
		      name="startDate"
		      value={tasks?.startDate}
		      onChange={(e) => {
			setTasks({...tasks, startDate: e.target.value})
		      }}
		    />
		  </div>
      
		  <div>
		    <label htmlFor="endDate">End Date</label>
		    <input
		      id="endDate"
		      type="date"
		      name="endDate"
		      value={tasks?.startDate}
		      onChange={(e) => {
			setTasks({...tasks, startDate: e.target.value})
		      }}
		    />
		  </div>     
		  
		  <button type="submit" className="boton">Edit Task</button>
		</form>
	      </Layout>
	);     
	  
}
      
      
      
export { EditTask };
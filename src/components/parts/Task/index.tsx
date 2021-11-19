
import "./style.scss";
import { FC, useState } from "react";
import { Task } from "../../../types";
import { getTasks } from "../../../api/tasks";
import { Link } from "react-router-dom";
import { api } from "../../../utils/axios";

const Tasks: FC = ( ) => {
  const [tasks, setTasks] = useState<Task[] | undefined>();

	const obtenerTasks = async () => {
	const response = await getTasks();
	setTasks(response);
	};

	if (!tasks){
		obtenerTasks();
	}

	console.log(tasks);					
	
	const deleteTask = async () => {
		const id = tasks?.map((task : any)=>{
			return task.id
		});			
		await api.delete(`/tasks/${id}.json`);
		console.log(id)
	};	

  return (
    <div className="container">
      {tasks?.map((task) => {
			return(	
									
				<div className="divTask">
					<h5>Task: {task.title}</h5>
					<p>Description:{task.description}</p>
					<p>State:{task.state}</p>
					<p>Star date:{task.startDate}</p>
					<p>End date:{task.endDate}</p>					
					<div className="row">
					<button className="linkColor" data-id={task.id} onClick={deleteTask}>Delete</button>
					<Link to="/editTask" className="linkColor">Edit Task</Link>	
					</div>
				</div>		
											
			);
	})}      
    </div>    
    );
};

export { Tasks };
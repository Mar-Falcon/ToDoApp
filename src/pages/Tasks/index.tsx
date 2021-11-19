import "./style.scss";

import { FormEvent, useState } from "react";
import { saveTaskData} from "./api";
import { Layout } from "../../components";
import { Link } from "react-router-dom";
    
const Control = () => {
	const [title, setTitle] = useState<string>("");
  	const [description, setDescription] = useState<string>("");
  	const [state, setState] = useState<string>("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	  
  	const handleSubmit = (e: FormEvent) => {
    	e.preventDefault();
        saveTaskData({ title, description, state, startDate, endDate});	
	}	

	return (
		<Layout>
			<div className="control">
				<h1>New task</h1>
				<form action="" onSubmit={handleSubmit} name="form">
					<div className="_formTask">
						<label htmlFor="text">Title</label>
						<input id="text" type="text" name="text" onChange={(e) => {setTitle(e.target.value);}} />
					</div>
					<div>
						<label htmlFor="">Description</label>
						<input id="description" type="text" name="description" onChange={(e) => {setDescription(e.target.value);}} />
					</div>
					<div>
						<label htmlFor="name">State</label>
						<select id="state" name="state"  onChange={(e) => {setState(e.target.value)}}>
							<option value="select" selected disabled>Choose one</option>
							<option value="completed">Completed</option>
							<option value="inprogress">In progress</option>
							<option value="postponed">Postponed</option>
							<option value="pending">Pending</option>
							<option value="cancelled">Cancelled</option>
         					 </select>						
					</div>
					<div>
						<label htmlFor="">Start Date</label>
						<input type="date" name="startDate" id="startDate" onChange={(e) => {setStartDate(e.target.value)}}/>
					</div>
					<div>
						<label htmlFor="">End Date</label>
						<input type="date" name="endDate" id="endDate" onChange={(e) => {setEndDate(e.target.value)}}/>
					</div>
					
						<button className="boton"> <Link to="/"> Dashboard </Link> </button>
						<button type="submit" className="boton"> Save </button>							
							
				</form>
			</div>
		</Layout>
	);
};

export { Control }






















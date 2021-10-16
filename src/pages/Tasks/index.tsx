import "./style.scss";

import { FormEvent, useState } from "react";
import { saveTaskData} from "./api";
import { Layout } from "../../components";
    
const Control = () => {
	const [title, setTitle] = useState<string>("");
  	const [description, setDescription] = useState<string>("");
  	const [state, setState] = useState<string>("");  	
  	const handleSubmit = (e: FormEvent) => {
    	e.preventDefault();
      saveTaskData({ title, description, state });
	}
	return (
		<Layout>
			<div className="control">
				<h1>New task</h1>
				<form action="" onSubmit={handleSubmit}>
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
						<input id="state" type="type" name="state" onChange={(e) => {setState(e.target.value);}}/>
					</div>
					<button type="submit">Guardar</button>
				</form>
			</div>
		</Layout>
	);
};

export { Control }






















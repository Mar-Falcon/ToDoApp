import "./style.scss";

import { FC, FormEvent, useState } from "react"
import { Layout } from "../../components";
import { signup } from "./api";

const SignUp: FC  = () => {

	const [email, setEmail] = useState<string>("");
  	const [password, setPassword] = useState<string>("");
  	const [name, setName] = useState<string>("");  	

  	const handleSubmit = (e: FormEvent) => {
    	e.preventDefault();

    	signup({ email, password, name });
  	};

	return (
		<Layout>
			<form action="" onSubmit={handleSubmit} className="formSignUp">
				<div className="inputSignUp">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" 
					onChange={(e) => {setEmail(e.target.value);}} />
				</div>
				<div className="inputSignUp">
          				<label htmlFor="password">Password</label>
          				<input id="password" type="password" name="password"
					onChange={(e) => {setPassword(e.target.value);}} />
				</div>
				<div className="inputSignUp">
					<label htmlFor="name">Nombre</label>
					<input id="name" type="name" name="name"
					onChange={(e) => {setName(e.target.value);}}/>
				</div>
				<button type="submit" className="buttonSignUp">Guardar</button>
			</form>
		</Layout>
	);
};

export { SignUp }
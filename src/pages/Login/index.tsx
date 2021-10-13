import { FormEvent } from "react";
import { Layout } from "../../components";


const Login = () => {	
	
	const handleSubmit = (e: FormEvent) =>{
		e.preventDefault();
		console.log("Reaccionó al Evento de formulario")
	}

	return (
		<Layout hideHeader>	        
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input id="email" type="text" name="email" />
				</div>
				<div>
					<label htmlFor="password">Contraseña</label>
					<input id="password" type="text" name="pass" />
				</div>
				<button type="submit">Enviar</button>
			</form>
		</Layout>     
	)
}
    
export { Login }
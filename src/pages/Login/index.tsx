import "./style.scss";

import { FC, FormEvent, useState } from "react";
import { Layout } from "../../components";
import { WithAuth } from "../../hoc";
import { useAuth } from "../../hooks";

const Login: FC = () => {	

	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
      
	const { login, userSession } = useAuth();      
	
	const handleSubmit = async (e: FormEvent) =>{
		e.preventDefault();
		try {
			await login(email, pass);
		      } catch (err) {
			console.log(err);
		      }
		    };
		  
		    // useEffect(() => {
		    //   localStorage.setItem("user", JSON.stringify(userSession));
		    // }, [userSession]);
		  
		    if (userSession) {
		      localStorage.setItem("user", JSON.stringify(userSession));
		    }

	return (
		<Layout mainClass="login" hideHeader hideFooter>	        
			<form onSubmit={handleSubmit} className="form-login">
				<div className="input-login">
					<label htmlFor="email">Email</label>
					<input id="email" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="input-login">
					<label htmlFor="pass">Contraseña</label>
					<input id="pass" type="password" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} />
				</div>
				<button type="submit" className="button-login">Enviar</button>
			</form>
		</Layout>     
	)
}
    
export const LoginPage = WithAuth(Login);
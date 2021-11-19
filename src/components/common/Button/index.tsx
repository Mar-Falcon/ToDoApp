import { FC } from "react";
import "./style.scss";

const Button: FC = ({children}) =>{

	return(
		<button className="button">{children}</button>
	)
}

export { Button }
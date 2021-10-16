import "./style.scss";
import { FC } from "react";
import { Nav } from "./Nav";

const Header: FC = () => {
	return (
	  <header className="header">
		<div>To Do App</div>
	    	<Nav></Nav>
	  </header>
	);
      };
      
export { Header };
import "./style.scss";
import { FC } from "react";
import { Nav } from "./Nav";

const Header: FC = () => {
	return (
	  <header className="header">
		<h1>To Do App</h1>
	    	<Nav></Nav>
	  </header>
	);
      };
      
export { Header };
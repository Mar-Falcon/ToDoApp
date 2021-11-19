import { FC } from "react"
import { Link } from "react-router-dom"
import "./style.scss"

const Nav: FC = () => {

	return (
		
	    <nav className="nav-primary">		
		<ul>
		    <li>
			<Link to="/" className="text-link"> Tablero </Link>			
		    </li>
		    <li>
		    	<Link to="/signUp"> Registros </Link>			
		    </li>
		    <li>
		    	<Link to="/users"> Usuarios </Link>  			
		    </li>
		    <li>
		    	<Link to="/login"> Login </Link>  			
		    </li>		        
		</ul>
	    </nav>
	    
	)
}
	
export { Nav }
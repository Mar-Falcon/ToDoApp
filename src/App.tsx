import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Control, Dashboard, Login, SignUp, Users } from "./pages";


const App = () => {    

  return (
    <>
      <BrowserRouter>       
        <Switch>
          <Route path="/signUp" component={SignUp}/> 
          <Route path="/login" component={Login}/>
          <Route path="/recovery-password" component={SignUp}/>

          <Route path="/task" component={Control}/>
          <Route path="/users" component={Users}/>
          <Route path="/" component={Dashboard}/>        
        </Switch>  
      </BrowserRouter> 
    </>   
  );
}

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Dashboard, Login, SignUp, Tasks, Users } from "./pages";

const App = () => {    

  return (
    <>
      <BrowserRouter>       
        <Switch>
          <Route path="/signUp" component={SignUp}/> 
          <Route path="/login" component={Login}/>
          <Route path="/tasks" component={Tasks}/>
          <Route path="/users" component={Users}/>
          <Route path="/" component={Dashboard}/>        
        </Switch>  
      </BrowserRouter> 
    </>   
  );
}

export default App;

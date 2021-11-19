import "./style.scss";

import { FC } from "react";
import { Link } from "react-router-dom";

import { Layout } from "../../components";

import { Tasks } from "../../components/parts/Task";
import { WithAuth } from "../../hoc";


const Dashboard: FC = () => {
  return (
    <Layout mainClass="dashboard">         
		    <Link to="/task"><span className="linkColor">New Task</span></Link>
        <h1>TASKS</h1> 	    
        <Tasks />
    </Layout>
  );
};

export const DashboardPage = WithAuth(Dashboard);
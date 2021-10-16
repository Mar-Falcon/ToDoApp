import { FC } from "react";
import { Link } from "react-router-dom";

import { Layout } from "../../components";
import { Tasks } from "../../components/parts/Task";
import { WithAuth } from "../../hoc";


const Dashboard: FC = () => {
  return (
    <Layout mainClass="dashboard">     
      <Link to="/users">Usuarios</Link>
      Este es el contenido de Dashboard
      Aqui van las TAREAS
      <Tasks />
    </Layout>
  );
};

export const DashboardPage = WithAuth(Dashboard);
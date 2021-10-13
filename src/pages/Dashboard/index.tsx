import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";

const Dashboard: FC = () => {
  return (
    <Layout>
      <Link to="/users">Usuarios</Link>
      Este es el contenido de Dashboard
      Aqui van las TAREAS
    </Layout>
  );
};

export { Dashboard };
import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Chamados from '../pages/Chamado';
import Chaedit from '../pages/ChamadoEdit';
import Fabricante from '../pages/Fabricante';
import Modelo from '../pages/Modelos';
import Equipamento from '../pages/Equipamento';
import Departamento from '../pages/Departamento';
import Login from '../pages/Login';
import SigIn from '../pages/User';

const AppRoutes: React.FC = () => (

  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/user" component={SigIn} />


   
      <Route path="/dashboard" component={Dashboard} isPrivate/>
      <Route path="/chamados" component={Chamados} isPrivate/>
      <Route path="/chamadoedit" component={Chaedit} isPrivate/>
      <Route path="/fabricante" component={Fabricante} isPrivate/>
      <Route path="/usuario/:idb" component={SigIn} isPrivate />
      <Route path="/usuario" component={SigIn} isPrivate />
      <Route path="/modelo" component={Modelo} isPrivate />
      <Route path="/equipamento" component={Equipamento} isPrivate/>
      <Route path="/departamento" component={Departamento} isPrivate/>
     
     
    <Layout> {/* Layout, server para montar uma aplicação SPA */}
        <Dashboard />
    </Layout>  {/* Vamos colocar somente as página do dasbord com SPA */}
  </Switch>


);

export default AppRoutes;
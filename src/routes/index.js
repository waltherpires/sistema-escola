import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/" exact component={Alunos} isClosed={false} />
      <MyRoute path="/aluno/:id/edit" exact component={Aluno} isClosed />
      <MyRoute path="/aluno/" exact component={Aluno} isClosed />
      <MyRoute path="/fotos/:id" exact component={Fotos} isClosed />
      <MyRoute path="/login/" exact component={Login} isClosed={false} />
      <MyRoute path="/register/" exact component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

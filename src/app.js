import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Header from './Header';
import Form from './Form';

const node = document.getElementById('app');
const app = (
  <div>
    <Header />
    <Form />
  </div>
);

ReactDOM.render(app, node);

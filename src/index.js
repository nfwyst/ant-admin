import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch } from 'react-router-dom';

// component
import Introduce from './components/introduce/';
import Table from './components/table/';
import Form from './components/form/';
import Progress from './components/progress/';
import Carousel from './components/carousel/';

// layout
import BasicLayout from './layouts/basic'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <BasicLayout exact path="/" component={Introduce}/>
      <BasicLayout exact path="/table" component={Table} />
      <BasicLayout exact path="/form" component={Form} />
      <BasicLayout exact path="/progress" component={Progress} />
      <BasicLayout exact path="/carousel" component={Carousel} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();

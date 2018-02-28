import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import Login from './containers/Login/Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/login" component={Login} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

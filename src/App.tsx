import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact={true} path="/" component={Home}/>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/skills" component={Skills} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
    </main>
  );
}

export default App;

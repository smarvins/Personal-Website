import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Background from './components/Background';
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

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import HomePages from './pages/HomePages';

function App() {
  return (
    <Router>
      <Route path='/' component={NavBar} />
      <Switch>
        <Route path='/' component={HomePages} />
      </Switch>
    </Router>
  );
}

export default App;

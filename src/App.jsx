import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePages from './pages/HomePages';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' component={HomePages} />
      </Switch>
    </Router>
  );
}

export default App;

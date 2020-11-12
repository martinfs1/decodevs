import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePages from './pages/HomePages';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' component={HomePages} />
      </Switch>
    </>
  );
}

export default App;

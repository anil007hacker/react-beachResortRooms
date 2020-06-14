import React from 'react';
import './App.css';
import Home from './pages/Home'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import Rooms from './pages/Rooms'
import Navbar from './components/Navbar'

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route path = '/' exact strict component={Home}/>
    <Route path = '/rooms' exact strict component={Rooms}/>
    <Route path = '/rooms/:slug' exact strict component={SingleRoom}/>
    <Route component = {Error}/>
    </Switch>
    </>
  );
}

export default App;

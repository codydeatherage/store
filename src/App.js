import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './NavBar'
//import { PlayerData, MoviesInsert, MoviesUpdate, SummonerSearch } from '../pages/index'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
               <Route path="/" exact component={Home}></Route> 
            </Switch> 
        </Router>
    )
}

export default App
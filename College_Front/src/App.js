
import './App.css';
//import axios from './axios'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Mainpage from './mainpage'
import CurrentTerm from './CurrentTerm'
import History from './History'
import Register from './Register'
function App() {


  return (
    <Router>
      <div className="App">
       
             <Switch>
           
                <Route path="/" exact component={Mainpage}/>
                <Route path="/current_term" exact component={CurrentTerm}/>
                <Route path="/history" exact component={History}/>
                <Route path="/register" exact component={Register}/>
             </Switch>
                
      </div>
      </Router>
  
    
  );
}

export default App;

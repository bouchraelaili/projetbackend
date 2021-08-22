import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import login from './components/Login/login';
import Home from './components/Login/home';
import Homeoffice from './components/Home/home';


import signup from './components/Login/signup';




import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <div >
      <Router>
        <Switch>
        <Route  path="/login" axact component={login}/>
        <Route exact path="/signup" component={signup}/> 
        <Route exact path="/home" component={Home}/>  
        <Route exact path="/homee" component={Homeoffice}/>  


 
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

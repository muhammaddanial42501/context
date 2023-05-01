import { BrowserRouter as Router, Switch, Route} from 'react'
import React from 'react';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
function App() {
  return (
   <>
   
   <Router>
   
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
    </Switch>
   </Router>
   </>  
  );
}
export default App;

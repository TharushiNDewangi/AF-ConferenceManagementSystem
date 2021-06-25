// import React from "react";

// const App = () => {
//   return <div>
//     <h1>hello</h1>
//   </div>;
// };

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home'

function App() {
  return (
  <>
  <Router>
  <Navbar />
    <Switch>
      <Route path='/' exact component = {Home}/>
    
   
     </Switch>
    </Router>
  </>
  );
}

export default App;



import ReactDOM from 'react-dom';
import { Route, Switch} from  'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn,getAllCategory} from './actions'
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';
import { getInitialData } from './actions/initialData.action';


function App()  {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
     dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
   
},[]);
  return(<div className="App">
    
  <Switch>
  <PrivateRoute path = "/d" exact component ={ Home }/>
    <PrivateRoute path = "/category" exact component = {Category}/>
    <PrivateRoute path = "/products" exact component = {Products}/>
    <PrivateRoute path = "/orders" exact component = {Orders}/>
    <Route path = "/signin" component ={ Signin }/>
    <Route path = "/signup" component ={ Signup }/>
  </Switch>
 

 
</div>) 
   
  
}

//ReactDOM.render(<App />, document.getElementById('root'));
window.store = store;
//part12
ReactDOM.render(
   <Provider store = {store}>
     <Router>
    <React.StrictMode>
    <App />
   </React.StrictMode>
     </Router>
    </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
export default App;

//console.log("dd");


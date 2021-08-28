import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login';
import React,{useEffect} from 'react';
import { useStateValue } from './StateProvider';
import auth from './firebase';
function App() {
const [{user},dispatch] =useStateValue()
useEffect(() => {
  const unsubscribe   = auth.onAuthStateChanged((authUser)=>{
     if(authUser){
           // the user is logged in....
       dispatch({
         type:'SET_USER',
         user:authUser
       })
     }else {
        // the user is log out ....
        dispatch({
          type:'SET_USER',
          user:null
        })

     }
   })
   return ()=>(
    unsubscribe()
   )
}, [])
 console.log('user Is >>>>>>>>>',user)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

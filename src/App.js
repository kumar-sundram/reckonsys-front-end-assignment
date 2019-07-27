import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './component/user/login'
import Logout from './component/user/logout'
import NavBar from './component/home/navbar'
import Member from './component/content/member'
import product from './component/content/products'
import Reporting from './component/content/reporting'
import users from './component/content/users'
import Home from './component/home/home'
import PrivateRoute from './component/home/privateRoute'
function App(){
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/user/login" component={Login} exact={true}></Route>
            <PrivateRoute path="/user/logout" component={Logout} exact={true}/>
            <PrivateRoute path="/member" component={Member} exact={true}/>
            <PrivateRoute path="/product" component={product} exact={true}/>
            <PrivateRoute path="/reporting" component={Reporting} exact={true}/>
            <PrivateRoute path="/users" component={users} exact={true}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
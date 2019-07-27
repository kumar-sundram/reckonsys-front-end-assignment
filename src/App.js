import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './component/user/login'
import Logout from './component/user/logout'
import NavBar from './component/home/navbar'
import Admin_section from './component/content/admin_section'
import Member from './component/content/member'
import product from './component/content/products'
import Reporting from './component/content/reporting'
import users from './component/content/users'
function App(){
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
          <Route path="/" component={Admin_section} exact={true}></Route>
            <Route path="/user/login" component={Login} exact={true}></Route>
            <Route path="/user/logout" component={Logout} exact={true}></Route>
            <Route path="/member" component={Member} exact={true}></Route>
            <Route path="/product" component={product} exact={true}></Route>
            <Route path="/reporting" component={Reporting} exact={true}></Route>
            <Route path="/users" component={users} exact={true}></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
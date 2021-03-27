import React from 'react'
import Header from '../src/components/header.component/header';
import Login from './components/login.component/login';
import Container from 'react-bootstrap/Container';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import LoginPage from './pages/loginpage/loginpage';
import RegisterPage from './pages/registerpage/registerpage';
import FoodmenuPage from './pages/foodmenupage/foodmenupage';
import RestLogin from './pages/restloginpage/restlogin';
import RestRegister from './pages/restresgisterpage/restregister';
import RestaurantPage from './pages/restcontrollerpage/restcontrollerpage';
import Restaurantfood from './components/restcontroller.component/restaurantfood';

const App = () => {
  return (
    <Router>
    <div>
       <Header />
       <Route exact path='/' component={HomePage}/>
 
      <Route exact path='/signin' component={LoginPage}/>
      <Route exact path='/register' component={RegisterPage}/>
      <Route exact path='/foodmenu' component={FoodmenuPage}/>
      <Route exact path='/restlogin' component={RestLogin}/>
      <Route exact path='/restregister' component={RestRegister}/>
      <Route exact path='/restaurantpage' component={RestaurantPage}/>
      <Route exact path='/restaurantfood' component={Restaurantfood}/>

 
    </div>
    </Router>
  )
}

export default App;


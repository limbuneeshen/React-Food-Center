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
import StripeContainer from './components/payment.component/stripeContainer';

const App = () => {
  return (
    <Router>
    <div>
       <Header />
       <Route exact path='/' component={HomePage}/>
      <Container>   
      <Route exact path='/signin' component={LoginPage}/>
      <Route exact path='/register' component={RegisterPage}/>
      <Route exact path='/foodmenu' component={FoodmenuPage}/>
      <Route exact path='/restlogin' component={RestLogin}/>
      <Route exact path='/restregister' component={RestRegister}/>
      <Route exact path='/payment' component={StripeContainer}/>

      </Container>
    </div>
    </Router>
  )
}

export default App;


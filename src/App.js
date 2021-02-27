import React from 'react'
import Header from '../src/components/header.component/header';
import Login from './components/login.component/login';
import Container from 'react-bootstrap/Container';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import LoginPage from './pages/loginpage/loginpage';
import RegisterPage from './pages/registerpage/registerpage';

const App = () => {
  return (
    <div>
       <Header />
       <Route exact path='/' component={HomePage}/>
      <Container>   
      <Route exact path='/signin' component={LoginPage}/>
      <Route exact path='/register' component={RegisterPage}/>
    

      </Container>
    </div>
  )
}

export default App;


import React from 'react';
import { Nav, Navbar, Form, FormControl} from 'react-bootstrap';


const RestaurantController= () => (
  <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#restprofile">Profile</Nav.Link>
      <Nav.Link  href="restaurantfood">Food Item</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default RestaurantController;
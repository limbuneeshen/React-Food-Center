import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter color="blue"  className=" font-small pt-5 mt-5">
      <MDBContainer fluid className="footercomp text-center ">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Food Center</h5>
            <p>
              Order your food and get delivered wherever you want in fastest possible time.
            </p>  
            <Link className='option' to='/restregister'>Partner With Us</Link>
            
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Our Developers</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Bibek Poudyal</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Neeshen Limbu</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Rojin Shrestha</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Prashant Bhandari</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.foodcenter.com">Food Center</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;


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
              Here you can use rows and columns here to organize your footer
              content.
            </p>  
            <Link className='option' to='/restregister'>Partner With Us</Link>
            
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
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


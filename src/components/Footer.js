import React,{Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import sneaker from '../sneaker.png';
import "../App.css";
import Nav from 'react-bootstrap/Nav';

export default class Footer extends Component{
    render(){
        return(
            <MDBFooter color="black" className="font-small pt-4 mt-4" id="bottom">
            <MDBContainer fluid className="text-center text-md-left" >
              <MDBRow>
                <MDBCol md="6">
                    <img src={sneaker} className="nav-brand"></img>
                    <h1 className="my-2 mx-auto">Sneakers</h1>
    
                </MDBCol>
                <MDBCol md="6" className="col-10 mx-auto col-lg-2">
                    <div>
                    <Nav className="mr-auto">
      <Nav.Link href="/" className="mr-auto">Home</Nav.Link>
 
      <Nav.Link href="/" className="mr-auto">Products</Nav.Link>
      <Nav.Link href="/contact" className="mr-auto">Contact</Nav.Link>
      <Nav.Link href="/cart" className="mr-auto">My Cart<i className =" fas fa-cart-plus"></i></Nav.Link>
    </Nav>


                    </div>
                  
                  
    
                </MDBCol>
                <MDBCol md="10" className="col-10 mx-auto col-lg-2">
                    <div>
                    <a href="#" className="fa fa-facebook"></a>
                    <span>Share</span>
                    </div>
                    <div>
                    <a href="#" className="fa fa-twitter"></a>
                    <span>Share</span>
                    </div>
                    <div>
                    <a href="#" className="fa fa-instagram"></a>
                    <span>Share</span>
                    </div>
                </MDBCol>
                
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <hr className="bg-light"></hr>
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: SNEAKERS
              </MDBContainer>
            </div>
          </MDBFooter>
        );
      }
      


    }
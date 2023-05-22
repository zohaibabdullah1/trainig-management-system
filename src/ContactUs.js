import React from "react";
import NavComp from './NavBrandComp';
// import { Link } from "react-router-dom";
import NavBarComponent from "./NavBar";

function ContactUs() {
  return (
    <>
      <NavComp />

      <div className='main-container'>
          <NavBarComponent/>
           </div>

      {/* <div className="arrow">
    <Link to='/home'><i class='fas fa-chevron-circle-left back-arrow'></i></Link>
      </div> */}
    
    <div className="ContactUs">
 
<h1><b className="contact_color">CONTACT</b> INFORMATION</h1>
      <h4 className="contact_second">Get In Touch With Us</h4>
      <h3 className="contact_second">Fuel Your Future<b className="coler"> simplify your life</b></h3>
      <div className='main-flex'>

        <div className="col-sm-4" id='information' ><h5> <b className="coler">A</b>DDRESS</h5>
        <div>Askari Corporate Towers, 12th Floor, 75- Block D1, Gulberg –III, LAHORE, Punjab, 54660, Pakistan</div>
        </div>
        
        <div className="col-sm-4"  id='information'><h5> <b className="coler">P</b>HONE</h5>
        <div>+92 42 35788961 </div>
        <div> +92 42 35788963</div>
        </div>
        
        <div className="col-sm-4" id='information'><h5> <b className="coler">M</b>AIL</h5>
        <div>info@contour-software.com</div>
        </div>
        
      </div>

      </div>
    </>
  );
}
export default ContactUs;

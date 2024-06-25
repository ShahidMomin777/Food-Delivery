// import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo_2} alt="" />
            <p>World of Food is tasty Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore facilis beatae odit autem eveniet repellendus enim sit commodi, explicabo dicta illum accusamus non alias minima perspiciatis totam rerum culpa!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-747470202</li>
                <li>contact@starfood.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; StarFood.com -All right Reserved.</p>
    </div>
  )
}

export default Footer

import React from 'react'
import './Footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
function Footer() {
  return (
    <div className='footer'>
        <div className='About'>
         <h5 className='logo'>Teachme</h5>
         <ul>
          <li><a href="#">teachme@gmail.com</a></li>
          <li><a href="#">+250 123 457 236</a></li>
          <li><a href="#">Become an instructor</a></li>
          <li><a href="#">Become an student</a></li>
          <li><p>@2023 TeachmeAll rights reserved</p></li>
          </ul>
        </div> 
        <div className='Courses'>
         <h5>About us </h5>
         <ul>
          <li><a href="#">Email</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Getting Sponsorship</a></li>
          </ul>
        </div> 
        <div className='Services '>
         <h5>Services </h5>
         <ul>
          <li><a href="#">Scholarships</a></li>
          <li><a href="#">Teaching and coaching </a></li>
          <li><a href="#">Internship and training </a></li>
          </ul>
        </div> 
        <div className='Services '>
         <h5>Courses</h5>
         <ul>
          <li><a href="#">Sciences course </a></li>
          <li><a href="#">Entreprenuership courses </a></li>
          <li><a href="#">Technology course </a></li>
          </ul>
        </div> 
        <div className="subscribe">
            <h5>SUBSCRIBE TO LETTER</h5>
            <input type="email" placeholder='Enter your emai'/>
            <button>SUBCRIBE</button>
            <div class="social-networks">
            <AiFillFacebook/>
            <BsWhatsapp/>
            <AiFillLinkedin/>
            <AiFillTwitterCircle/>
           </div>
        </div>
    </div>
  )
}

export default Footer
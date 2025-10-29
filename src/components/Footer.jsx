import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px',background:'brown',overflow: 'hidden'}}>
        <div className='d-flex justify-content-center align-items-center p-5 flex-column' style={{ marginBottom: 0 }}>
            <h1 className='text-white'>Contact Us</h1>
            <h5 className='text-white fw-bold' > <IoMdMail /> resumebuilder@gmail.com</h5>
            <h5 className='text-white fw-bold'><FaPhoneAlt /> 8078085653</h5>
            <h4 className='text-white fw-bold'>Connect With Us</h4>
            
            <div className='d-flex justify-content-center fs-4 my-3'>
              <div className='text-white'>
                  <IoLogoWhatsapp className='me-3' />
                  <FaFacebook className='me-3'/>
                  <FaInstagram />
              </div>
              
              
            </div>
            <div className=' justify-content-center align-items-center'>
                <p className='mb-0'>All rights reserved</p>
              </div>
        </div>

    </div>
  )
}

export default Footer
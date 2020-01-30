import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFlickr } from 'react-icons/fa';


function Person() {
    return (
        <div className="person">
            {/* <img 
                src="https://cloud.visura.co/users/13409-user_photo-4062.medium.jpeg" 
                srcSet="https://cloud.visura.co/users/13409-user_photo-4062.medium.jpeg" 
                sizes="100vw" alt="Resume person" 
            /> */}
            <div className="basic-info">
                <h1>Joanna Doe</h1>
                <h2>Front End Developer</h2>
                <ul className="social-links">
                    <li><FaFacebook /></li>
                    <li><FaTwitter /></li>
                    <li><FaLinkedin /></li>
                    <li><FaInstagram /></li>
                    <li><FaFlickr /></li>
                </ul>
            </div>
        </div>
    );
}

export default Person;

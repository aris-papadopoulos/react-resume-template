import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
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
                    <li><a target="_blank" rel="noopener noreferrer" href="https://ca.linkedin.com/in/joanna-doe-66965039?trk=people-guest_people_search-card"><FaLinkedin /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/people/Joanna-Doe/100009692499268"><FaFacebook /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/hales_u?lang=en"><FaTwitter /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/joanna671princess/?hl=en"><FaInstagram /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/72696347@N07/"><FaFlickr /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Person;

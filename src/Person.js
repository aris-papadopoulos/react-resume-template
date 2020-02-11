import React, { useState, useEffect } from 'react';
import { 
        FaLinkedin,
        FaGithub,
        FaFacebook,
        FaTwitter,
        FaInstagram,
        FaFlickr
} from 'react-icons/fa';

// Helpers
import { GOOGLE_SHEET_ID, GOOGLE_API_KEY } from './options';

const arrayToObject = (arr) =>
Object.assign({}, ...arr.map(item => ({[item[0]]: item[1]})));

const fetchURL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/basic!A:B?key=${GOOGLE_API_KEY}`;
let objectData;

function Person() {

    const [personData, setPersonData] = useState(objectData);

    useEffect(() => {
        if (!objectData)
        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
              objectData = arrayToObject(data.values, 'value', );
              setPersonData(objectData);
        });
    });

    return (
        <div className="person" style={{
            background: `url(${(personData && personData.picture) ? personData.picture : ''}) center top/cover no-repeat`
        }}>
            <div className="basic-info">
                <h1>{(personData) ? personData.fullName : ''}</h1>
                <h3>{(personData) ? personData.jobTitle : ''}</h3>
                <ul className="social-links">
                {(personData && personData.linkedIn) ? <li> <a target="_blank" rel="noopener noreferrer" href={personData.linkedIn}><FaLinkedin /></a></li> : null}
                {(personData && personData.gitHub) ? <li> <a target="_blank" rel="noopener noreferrer" href={personData.gitHub}><FaGithub /></a></li> : null}
                {(personData && personData.facebook) ? <li> <a target="_blank" rel="noopener noreferrer" href={personData.facebook}><FaFacebook /></a></li> : null}
                {(personData && personData.twitter) ? <li> <a target="_blank" rel="noopener noreferrer" href={personData.twitter}><FaTwitter /></a></li> : null}
                {(personData && personData.instagram) ? <li> <a target="_blank" rel="noopener noreferrer" href={personData.instagram}><FaInstagram /></a></li> : null}
                {(personData && personData.flickr) ? <li> <a target="_blank" rel="noopener noreferrer" href={personData.flickr}><FaFlickr /></a></li> : null}
                </ul>
            </div>
        </div>
    );
}

export default Person;

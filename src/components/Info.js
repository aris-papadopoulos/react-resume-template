import React, { useState, useEffect } from 'react';

import { 
    FaUserGraduate, 
    FaBriefcase,
    FaMedal,
    FaHeart, 
    FaEnvelope, 
    FaPhone,
    FaSkype
} from "react-icons/fa";

// Other 3rd party
import { Scrollbars } from 'react-custom-scrollbars';

// Helpers
import { GOOGLE_SHEET_ID, GOOGLE_API_KEY } from '../setup';

/*  Holds data as they come from the Google Sheets API requests, 
    so that we no longer need to refetch after first request */
let objectData = {
    main: null,
    work_samples: null,
    skill_set: null,
    contact: null
}

// Converts a 2-column array into an object of key:value pairs
const arrayToObject = (arr) =>
Object.assign({}, ...arr.map(item => ({[item[0]]: item[1]})));


/*  Google Sheet API returns all results in array. This function is used to group the 'main' info into 
    paragraphs, experience, education & interests, in order to later render them in the correct section */
const groupMainInfoArray = (arr) => {
    // Object used to group API data
    let mainInfoObj = {
        paragraph: [],
        experience: [],
        awards: [],
        education: [],
        interests: []
    };
    arr.map(item => {
        if (item[0] === 'paragraph') {
            mainInfoObj.paragraph.push([item[1], item[2]]);
        } 
        else if (item[0] === 'experience') {
            mainInfoObj.experience.push([item[1], item[2], item[3]]);
        }
        else if (item[0] === 'award') {
            mainInfoObj.awards.push([item[1], item[2], item[3]]);
        }
        else if (item[0] === 'education') {
            mainInfoObj.education.push([item[1], item[2], item[3]]);
        }
        else if (item[0] === 'interest') {
            mainInfoObj.interests.push([item[1], item[2]]);
        }
        return mainInfoObj;
    });
    return mainInfoObj;
}


const Info = (props) => {

    const { sheetTitle, range } = props.selected;
    const fetchURL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${sheetTitle}!${range}?key=${GOOGLE_API_KEY}`;

    const [infoData, setInfoData] = useState(objectData);

    useEffect(() => {
        if (!infoData[sheetTitle])
        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
                setInfoData({ ...infoData, [sheetTitle]: data });
        });
    });

    function renderView({ style, ...props }) {
        const viewStyle = {
            padding: '0 15px'
        };
        return (
            <div
                className="box"
                style={{ ...style, ...viewStyle }}
                {...props}/>
        );
    }

    function createMarkup(html) {
        return {__html: html};
    }

    function renderInfoType() {

        const { sheetTitle } = props.selected;

        switch(sheetTitle) {

            case 'main':
                let groupedData;
                if (infoData[sheetTitle] && infoData[sheetTitle].values) {
                    groupedData = groupMainInfoArray(infoData[sheetTitle].values);
                }
                return (infoData[sheetTitle]) ? 
                    <main>
                        <h2>About me</h2>
                        {(groupedData.paragraph.length) ?
                        <section className="main-info paragraph">
                            {groupedData.paragraph.map((paragraph, i) => {
                                return (
                                    <article key={i}>
                                        <h3>{paragraph[0]}</h3>
                                        <p>{paragraph[1]}</p>
                                    </article>
                                )
                            })}
                        </section>
                        : null}
                        {(groupedData.experience.length) ?
                        <section className="main-info experience">
                            <div className="main-info-title">
                                <FaBriefcase />
                                <h2>Experience</h2>
                            </div>
                            {groupedData.experience.map((experience, i) => {
                                return (
                                    <article key={i}>
                                        <span className="period">{experience[2]}</span>
                                        <h3>{experience[0]}</h3>
                                        <p>{experience[1]}</p>
                                    </article>
                                )
                            })}
                        </section>
                        : null}
                        {(groupedData.awards.length) ?
                        <section className="main-info award">
                            <div className="main-info-title">
                                <FaMedal />
                                <h2>Awards</h2>
                            </div>
                            {groupedData.awards.map((award, i) => {
                                return (
                                    <article key={i}>
                                        <span className="period">{award[2]}</span>
                                        <h3>{award[0]}</h3>
                                        <p>{award[1]}</p>
                                    </article>
                                )
                            })}
                        </section>
                        : null}
                        {(groupedData.education.length) ?
                        <section className="main-info education">
                            <div className="main-info-title">
                                <FaUserGraduate />
                                <h2>Education</h2>
                            </div>
                            {groupedData.education.map((education, i) => {
                                return (
                                    <article key={i}>
                                        <span className="period">{education[2]}</span>
                                        <h3>{education[0]}</h3>
                                        <p>{education[1]}</p>
                                    </article>
                                )
                            })}
                        </section>
                        : null}
                        {(groupedData.interests.length) ?
                        <section className="main-info interests">
                            <div className="main-info-title">
                                <FaHeart />
                                <h2>Interests</h2>
                            </div>
                            {groupedData.interests.map((interests, i) => {
                                return (
                                    <article key={i}>
                                        <h3>{interests[0]}</h3>
                                        <p>{interests[1]}</p>
                                    </article>
                                )
                            })}
                        </section>
                        : null}
                    </main>
                : null
            case 'skill_set':
                return ( 
                    <main>
                        <h2>Technical Skill Set</h2>
                        <div className="skill-set">
                            {(infoData[sheetTitle] && infoData[sheetTitle].values) ? infoData[sheetTitle].values.map(skill => {
                                return (
                                    <div className="skill" key={skill[0]}>
                                        <p className="skill-info">
                                            <span className="skill-name">{skill[0]}</span>
                                            <span className="skill-level">{`${skill[1]}%`}</span>
                                        </p>
                                        <div className="progress-container">
                                            <div className="progress-bar" style={{width: `${skill[1]}%`}}></div>
                                        </div>
                                    </div>
                                )
                            }) : null}
                        </div>
                    </main>
                )
            case 'work_samples':
                return (
                    <main>
                        <h2>Recent Projects</h2>
                        <div className="work-samples">
                            {(infoData[sheetTitle] && infoData[sheetTitle].values) ? infoData[sheetTitle].values.map((item, i) => {
                                return (
                                    <article key={item[0]}>
                                        <img srcSet={item[3]} sizes="100vw" alt={item[0]} />
                                        {(item[1]) 
                                            ? <a href={item[1]} target="_blank" rel="noopener noreferrer">{item[0]}</a> 
                                            : <span>{item[0]}</span>}
                                        <p>{item[2]}</p>
                                    </article>
                                )
                            }) 
                            : null}
                        </div>
                    </main>
                )
            case 'contact':
                const contactData = (infoData[sheetTitle]) ? arrayToObject(infoData[sheetTitle].values) : null;
                return (contactData) ? (
                    <main>
                        <h2>Contact</h2>
                        {(contactData.text) ? <p>{contactData.text}</p> : null}
                        {(contactData.location) ? <div dangerouslySetInnerHTML={createMarkup(contactData.location)} /> : null}
                        {(contactData.email) ? <p className="contact-data"><FaEnvelope />{contactData.email}</p> : null}
                        {(contactData.phone) ? <p className="contact-data"><FaPhone />{contactData.phone}</p> : null}
                        {(contactData.skype) ? <p className="contact-data"><FaSkype />{contactData.skype}</p> : null}
                    </main>
                )
                : null

            default:
                return null
        }
    }

    return (
        <div className="info">
            <Scrollbars renderView={renderView}>
                {renderInfoType()}
            </Scrollbars>
        </div>
    );
}

export default Info;

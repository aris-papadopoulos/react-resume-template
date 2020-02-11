import React, { useState, useEffect } from 'react';

import { 
    FaUserGraduate, 
    FaBriefcase, 
    FaHeart, 
    FaEnvelope, 
    FaPhone
} from "react-icons/fa";

// Other 3rd party
import { Scrollbars } from 'react-custom-scrollbars';

// Helpers
import { GOOGLE_SHEET_ID, GOOGLE_API_KEY } from './options';

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
        else if (item[0] === 'education') {
            mainInfoObj.education.push([item[1], item[2], item[3]]);
        }
        else if (item[0] === 'interests') {
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
                    </main>
                : null
            case 'skill_set':
                return (infoData[sheetTitle] && infoData[sheetTitle].values) ? 
                    <main>
                        <h2>Technical Skill Set</h2>
                        <div className="skill-set">
                            {(infoData[sheetTitle].values) ? infoData[sheetTitle].values.map(skill => {
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
                : null
            case 'work_samples':
                return (infoData[sheetTitle] && infoData[sheetTitle].values) ? 
                    <main>
                        <h2>Recent Projects</h2>
                        <div className="work-samples">
                            {(infoData[sheetTitle].values) ? infoData[sheetTitle].values.map((item, i) => {
                                return (
                                    <article key={item[0]}>
                                        <img srcSet={item[2]} sizes="100vw" alt={item[0]} />
                                        <h4>{item[0]}</h4>
                                        <p>{item[1]}</p>
                                    </article>
                                )
                            }) : null}
                        </div>
                    </main>
                : null
            case 'contact':
                const contactData = (infoData[sheetTitle]) ? arrayToObject(infoData[sheetTitle].values) : null;
                return (contactData) ? (
                    <main>
                        <h2>Contact</h2>
                        <p>{contactData.text}</p>
                        <div dangerouslySetInnerHTML={createMarkup(contactData.location)} />
                        <p className="contact-data"><FaEnvelope />{contactData.email}</p>
                        <p className="contact-data"><FaPhone />{contactData.phone}</p>
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

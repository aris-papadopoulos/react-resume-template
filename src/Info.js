import React, { useState, useEffect } from 'react';

// Other 3rd party
import { Scrollbars } from 'react-custom-scrollbars';

let objectData = {
    main: null,
    work_samples: null,
    articles: null,
    interests: null,
    contact: null
}

const arrayToObject = (arr) =>
Object.assign({}, ...arr.map(item => ({[item[0]]: item[1]})));

const Info = (props) => {

    const { sheetTitle, range } = props.selected;

    const fetchURL = `https://sheets.googleapis.com/v4/spreadsheets/1raPYKhL5Bk0y3H3ti7o4bvGktzGfMW99nMNTXYK-idE/values/${sheetTitle}!${range}?key=AIzaSyBhiqVypmyLHYPmqZYtvdSvxEopcLZBdYU`;


    const [infoData, setInfoData] = useState(objectData[props.selected]);

    useEffect(() => {
        if (!objectData[sheetTitle])
        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
                objectData[sheetTitle] = data;
                console.log(objectData)
                setInfoData(data);
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
            case 'interests':
                return (objectData[sheetTitle]) ? objectData[sheetTitle].values.map((section, i) => {
                    return (
                        <section key={i}>
                            <h3>{section[0]}</h3>
                            <p>{section[1]}</p>
                        </section>
                    )
                })
                : null
            case 'articles':
            case 'work-samples':
                return (objectData[sheetTitle]) ? 
                    <div className="grid-wrapper">
                        {(objectData[sheetTitle].values) ? objectData[sheetTitle].values.map((item, i) => {
                            console.log(item[i], i)
                            return (
                                <article key={item[0]}>
                                    <img srcSet={item[2]} sizes="100vw" alt={item[0]} />
                                    <h4>{item[0]}</h4>
                                    <p>{item[1]}</p>
                                </article>
                            )
                        }) : null}
                    </div>
                : null
            case 'contact':
                console.log(objectData);
                const contactData = (objectData[sheetTitle]) ? arrayToObject(objectData[sheetTitle].values) : null;
                return (contactData) ? (
                    <div>
                        <p><strong>E-Mail: </strong>{objectData[sheetTitle].values[1][1]}</p>
                        <p><strong>Phone: </strong>{objectData[sheetTitle].values[2][1]}</p>
                        <div dangerouslySetInnerHTML={createMarkup(objectData[sheetTitle].values[0][1])} />
                    </div>
                )
                : null

            default:
                return null
        }
    }

    console.log(infoData);
    return (
        <div className="info">
            <Scrollbars renderView={renderView}>
                {renderInfoType()}
            </Scrollbars>
        </div>
    );
}

export default Info;

import React from 'react';

// Other 3rd party
import { Scrollbars } from 'react-custom-scrollbars';

class Info extends React.Component {

    renderView({ style, ...props }) {
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

    render() {
        return (
            <div className="info">
                <Scrollbars renderView={this.renderView}>
                    <h3>About me</h3>
                    <p>Prolific, full stack web developer with a passion for metrics and beating former "best-yets." Prototyped 25 new product features per year for Flexor, Inc. Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects, including a 55% increase for Flexor, Inc. Passionate about building world class web applications. One of my sites received a 2015 Webby for Best Navigation and Structure.</p>
                    <p>
                        Today, we live and breathe media, minute-by-minute, hour-by-hour. News, television, social media even recognize.
                        Critical media studies requires you to study the subject in-depth,
                        analysing and critiquing what you find.
                        From newspapers, radio and television, to the Internet and mobile technologies, media, communication technologies and information tools impact our daily lives in countless ways.
                        We use them to socialize with others, to seek out or share information and entertainment and to participate in social and cultural debates.
                        But what are media, exactly? How do media institutions, technologies, and content inform the development of society and culture and influence our activities and behaviours?
                    </p>
                </Scrollbars>
            </div>
        );
    }
}

export default Info;

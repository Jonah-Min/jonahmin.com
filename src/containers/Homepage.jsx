import { PureComponent } from 'react';
import { NavLink } from 'react-router';

import '../stylesheets/homePage.css';

export default class HomePage extends PureComponent {
    render() {
        return (
            <span className="home-page-container">
                <span className="about-me-container">
                    <h2>Hello There, I'm Jonah!</h2>
                    <img src="/me.jpg" />
                    <span className="about">
                        <h3>A Little Bit About Me</h3>
                        <p>I graduated from Northeastern University in 2019 with a major in Computer Science and a minor in Art, and I've been a senior software engineer at HubSpot ever since. I love bird watching, and in my free time I enjoy drawing, playing Magic: the Gathering with friends, running, biking, and hiking.</p>
                    </span>
                    <span className="projects">
                        <h3>Personal Projects</h3>
                        <ul className="projects-list">
                            <li><NavLink to="/lifelist">Life list</NavLink>: A list of every bird species I've ever seen.</li>
                            <li><NavLink to="/emojify">Emojify</NavLink>: A (stupid) website I made to generate messages out of emojis at work.</li>
                        </ul>
                    </span>
                </span>
            </span >
        );
    }
}
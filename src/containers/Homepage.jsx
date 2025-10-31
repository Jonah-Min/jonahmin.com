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
                        <p>I graduated from Northeastern University in 2019 with a major in Computer Science and a minor in Art, and I've been a senior software engineer at HubSpot ever since. I enjoy bird watching, drawing, playing Magic: the Gathering, running, biking, and hiking.</p>
                    </span>
                    <span className="projects">
                        <h3>Personal Projects</h3>
                        <ul className="projects-list">
                            <li>
                                <span className="project-link">
                                    <NavLink to="https://lifelist.jonahmin.com">Life list</NavLink> -
                                    <p>A list of every single bird I've ever seen.</p>
                                </span>
                            </li>
                            <li>
                                <span className="project-link">
                                    <NavLink to="https://emojify.jonahmin.com">Emojify</NavLink> -
                                    <p>A website I made to generate messages out of emojis at work.</p>
                                </span>
                            </li>
                        </ul>
                    </span>
                </span>
            </span >
        );
    }
}
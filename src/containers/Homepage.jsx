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
                        <p>I graduated from Northeastern University in 2019 with a major in Computer Science and a minor in Art, and I've been a senior software engineer at HubSpot ever since. I love bird watching, drawing, playing Magic: the Gathering with friends, running, biking, and hiking.</p>
                    </span>
                    <span className="projects">
                        <h3>Personal Projects</h3>
                        <ul className="projects-list">
                            <li>
                                <span className="project-link">
                                    <NavLink to="/lifelist">Life list</NavLink> -
                                    <p>A comprehensive list of every single bird species I've ever seen.</p>
                                </span>
                            </li>
                            <li>
                                <span className="project-link">
                                    <NavLink to="/emojify">Emojify</NavLink> -
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
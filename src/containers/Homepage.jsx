import { PureComponent } from 'react';
import { NavLink } from 'react-router';

import '../stylesheets/homePage.css';

export default class HomePage extends PureComponent {
    render() {
        return (
            <span className="home-page-container">
                <span className="about-me-container">
                    <img className="header-image" src="/wilsonswarbsquare.jpg" />
                    <h1>Jonah Min</h1>
                    <img src="/me.jpg" />
                    <span className="about">
                        <h3>A Little Bit About Me</h3>
                        <p>Hello there, My name's Jonah!</p>
                        <p>
                            I graduated from Northeastern University in 2019 with a major in Computer Science, and I've been a senior software engineer at HubSpot ever since.
                            I also have a minor in art, but I don't really use it very much. I love bird watching, which ends up taking up most of my time, in fact I'm probably out bird watching right now!
                            I also enjoy drawing, reading, Magic: the Gathering, running, biking, and hiking.
                        </p>
                    </span>
                    <span className="projects">
                        <h3>Personal Projects</h3>
                        <ul className="projects-list">
                            <li>
                                <span className="project-link">
                                    <NavLink to="https://lifelist.jonahmin.com">Life list</NavLink> -
                                    <p>
                                        In bird watching, a life list catalogues every single bird species you've ever seen, including when and where you saw it.
                                        A popular software for keeping track of your list is eBird, but personally I prefer to just to keep track of it myself in a spreadsheet.
                                        I spun up this simple website to display my list alongside the photos (some good, some bad) I've taken of some of the birds over the years.
                                        It's also got a map of all the places I've gone bird watching. I'm hoping to continue to add features (and birds) to it!
                                    </p>
                                </span>
                            </li>
                            <li>
                                <span className="project-link">
                                    <NavLink to="https://emojify.jonahmin.com">Emojify</NavLink> -
                                    <p>
                                        During our onboarding at HubSpot, a friend and I decided to use some of the down time to spin up a website so you could easily generate messages in Slack only using emojis.
                                        We manually went through every custom emoji at the time to catalogue the ones that vaguely looked like letters in the alphabet.
                                        I'm now hosting this website so coworkers have access to the tool too!
                                    </p>
                                </span>
                            </li>
                        </ul>
                    </span>
                </span>
            </span >
        );
    }
}
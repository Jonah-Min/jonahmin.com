import { PureComponent } from 'react';
import { NavLink } from 'react-router';

import '../stylesheets/homePage.css';

export default class HomePage extends PureComponent {
    render() {
        return (
            <div className="home-page-container">
                <div className="about-me-container">
                    <img className="header-image" src="/wilsonswarbsquare.jpg" />
                    <h1>Jonah Min</h1>
                    <img src="/me.jpg" />
                    <div className="about">
                        <h3>A Little Bit About Me</h3>
                        <p>Hello there, My name's Jonah!</p>
                        <p>
                            I graduated from Northeastern University in 2019 with a major in Computer Science, and I've been a senior software engineer at HubSpot ever since.
                            I also have a minor in art! I love bird watching, which ends up taking up most of my time, in fact I'm probably out bird watching right now!
                            I also enjoy drawing, reading, Magic: the Gathering, running, biking, and hiking.
                        </p>
                    </div>
                    <div className="projects">
                        <h3>Personal Projects</h3>
                        <div className="project-link">
                            <NavLink to="https://lifelist.jonahmin.com">Life list</NavLink>
                            <p>
                                In bird watching, a life list catalogues every single bird species you've ever seen, including when and where you saw it.
                                A popular software for keeping track of your list is eBird, but personally I prefer to just to keep track of it myself in a spreadsheet.
                                I spun up this simple website to display my list alongside the photos (some good, some bad) I've taken of some of the birds over the years.
                                It's also got a map of all the places I've gone bird watching. I'm hoping to continue to add features (and birds) to it!
                            </p>
                        </div>
                        <div className="project-link">
                            <NavLink to="https://rarebirds.jonahmin.com">Rare birds map</NavLink>
                            <p>
                                The popular bird watching website eBird has an API that lets you see nearby rare birds based on a given latitude
                                and longitude. I decided to use that API to create a little app that includes pins where there are notable sightings.
                                You can input any latitude and longitude you like to see rare birds in the area!
                            </p>
                        </div>
                        <div className="project-link">
                            <NavLink to="https://emojify.jonahmin.com">Emojify</NavLink>
                            <p>
                                During our onboarding at HubSpot, a friend and I decided to use some of the down time to spin up a website so you could easily generate messages in Slack only using emojis.
                                We manually went through every custom emoji at the time to catalogue the ones that vaguely looked like letters in the alphabet.
                                I'm now hosting this website so coworkers have access to the tool too!
                            </p>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}
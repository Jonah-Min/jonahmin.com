import { PureComponent } from 'react';

import '../stylesheets/homePage.css';

export default class HomePage extends PureComponent {
    render() {
        return (
            <span className="home-page-container">
                <span className="home-page-body">
                    <h1>Life List</h1>
                </span>
            </span>
        );
    }
}
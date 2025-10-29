import { PureComponent } from 'react';

import WebsiteHeader from '../components/WebsiteHeader';

import '../stylesheets/lifelist.css';

export default class HomePage extends PureComponent {
    render() {
        return (
            <span className="life-list-container">
                <WebsiteHeader />
                <span className="life-list">
                    <h1>Life List</h1>
                </span>
            </span>
        );
    }
}
import { PureComponent } from 'react';
import { NavLink } from 'react-router';

import '../stylesheets/websiteHeader.css';

class WebsiteHeader extends PureComponent {
  render() {
    return (
      <NavLink to="/">
        <div className="website-header" >
          <span className="name">Jonah Min</span>
        </div>
      </NavLink>
    );
  }
}

export default WebsiteHeader;
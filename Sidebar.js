import React, { Component } from 'react';
import profile from './profile.png'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar animated slideInLeft">
                <img className="profile" src={profile} alt="Niggo"/>
                <img className="profile-bg" src={profile} alt="Niggo-BG"/>
                {this.props.children}
            </div>
        );
    }
}

export default Sidebar;

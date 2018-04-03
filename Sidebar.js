import React, { Component } from 'react';
import profile from './profile.png'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar animated slideInLeft">
                <img className="profile" src={profile}/>
                <img className="profile-bg" src={profile}/>
                <div className="sidebar-text">
                    <p className="title">Nico Weingärtner</p>
                    <p>
                        Web-Entwicklung & JavaScript-Frameworks SS 2018
                    </p>
                    <p className="info">
                        In dem WPM geht es um die Entwicklung moderner hochgradig interaktiver Webanwendungen.Bekannte Beispiele sind Google gmail, Facebook, Twitter, Instagram, Netflix und AirBnB u.v.a.m. Diese Anwendungen sind als Single Page Applications (SPA) organisiert und sind im Kern komplexe JavaScript-Anwendungen, die durch HTML und CSS ergänzt werden.
                    </p>
                    <p className="info">
                        <b>Auf dieser Seite befinden sich die von mir erstellten Lösungen zu den Aufgaben der Veranstaltung</b>
                    </p>
                </div>
            </div>
        );
    }
}

export default Sidebar;

import React, { Component } from 'react';
import Item from './Item'
import Sidebar from "./Sidebar";
import {
    Link
} from 'react-router-dom'

class Items extends Component {
    constructor(){
        super();
        this.state = {
            text: []
        }
    }
    componentDidMount(){
        fetch('https://spreadsheets.google.com/feeds/list/1uUVxl3QMCEuOHZrkw8NfM_506JxAlXxbr4R7co_rVnk/od6/public/values?alt=json')
            .then((response)=> {
                return response.json();
            })
            .then((myJson)=> {
                console.log(myJson);
                let items = []
                myJson.feed.entry.forEach((item)=> {
                    items.push(item.gsx$test.$t);
                    console.log(items);
                });
                this.setState({
                    text: items
                });
            });
    }
    render() {
        console.log(myItems);
        let myItems = this.state.text.map((item) => <Item name={item}/>);
        return (
            <React.Fragment>
            <Sidebar>
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
            </Sidebar>
                <div  className="item-container animated slideInUp">
                <Link to="/exercise2">
                    <div className="item">Aufgabe 2</div>
                </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Items;

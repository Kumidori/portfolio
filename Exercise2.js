import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import Smoothielist from "./Smoothielist"
import firebase from './firebase.js';
import strawberry from './strawberry.png'
import avocado from './avocado.png'
import blueberry from './blueberry.png'


class Exercise2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            red: 0,
            green: 0,
            blue: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    setColor(e,color){
        this.setState({[color]: e.target.value});
    }
    handleChange(e) {
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            title: this.state.title,
            red: this.state.red,
            green: this.state.green,
            blue: this.state.blue
        };
        itemsRef.push(item);
        this.setState({
            title: '',
            red: 0,
            green: 0,
            blue: 0
        });
    }


    render() {
        return (
            <React.Fragment>
                <Sidebar>
                    <div className="smoothie-info">Wähle die Anzahl an Zutaten und mixxe deinen eigenen Smoothie</div>
                    <div className="preview" style={{backgroundColor:`rgb(${this.state.red},${this.state.green},${this.state.blue})`}}></div>
                    <div className="erdbeer">
                        <img src={strawberry} alt="strawberry" width={64} height={64}/>
                        <p>{this.state.red / 25} x Erdbeeren</p>
                        <input type="range" min={0} max={255} value={this.state.red} onChange={(e)=> this.setColor(e,"red")}/>
                    </div>
                    <div className="avocado">
                        <img src={avocado} alt="strawberry" width={64} height={64}/>
                        <p>{this.state.green / 25} x Avocados</p>
                        <input type="range" min={0} max={255} value={this.state.green} onChange={(e)=> this.setColor(e,"green")}/>
                    </div>
                    <div className="blaubeer">
                        <img src={blueberry} alt="strawberry" width={64} height={64}/>
                        <p>{this.state.blue / 25} x Blaubeeren</p>
                        <input type="range" min={0} max={255} value={this.state.blue} onChange={(e)=> this.setColor(e,"blue")}/>
                    </div>
                    <input className="smoothie-name" type="text" name="currentItem" placeholder="Name your Smoothie!" onChange={this.handleChange} value={this.state.title}/>
                    <button className="add-smoothie" onClick={this.handleSubmit}>Mix Smoothie!</button>
                </Sidebar>
                <Smoothielist/>
            </React.Fragment>
        );
    }

}

export default Exercise2;

import React, { Component } from 'react';
import firebase from './firebase.js';



class AddSmoothie extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            red: this.props.red,
            green: this.props.green,
            blue: this.props.blue
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <form className="addform" onSubmit={this.handleSubmit}>
                    <input type="text" name="currentItem" placeholder="Name your Smoothie!" onChange={this.handleChange} value={this.state.title}/>
                    <button>Add stuff</button>
                </form>
            </div>
        );
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
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
            title: ''
        });
    }
}

export default AddSmoothie;

import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="item" to={`item/${this.props.name}`}>
               {this.props.name}
            </Link>
        );
    }

}

export default Item;

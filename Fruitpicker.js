import React, { Component } from 'react';

class Fruitpicker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <div className="erdbeer">
                {this.props.colors.red}
                <input type="range" min={0} max={255} value={this.props.colors.red} onChange={(e)=> this.props.setColor(e,"red")}/>
            </div>
            <div className="avocado">
                {this.props.colors.red}
                <input type="range" min={0} max={255} value={this.props.colors.red} onChange={(e)=> this.props.setColor(e,"green")}/>
             </div>
             <div className="blaubeer">
                {this.props.colors.red}
                <input type="range" min={0} max={255} value={this.props.colors.red} onChange={(e)=> this.props.setColor(e,"blue")}/>
             </div>
            </React.Fragment>
        );
    }

}

export default Fruitpicker;

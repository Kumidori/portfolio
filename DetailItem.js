import React, { Component } from 'react';

class DetailItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="item-container animated bounceIn">
                <div className="detail-item">
                    {this.props.match.params.name}
                </div>
            </div>
        );
    }

}

export default DetailItem;

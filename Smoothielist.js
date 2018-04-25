import React, {PureComponent} from 'react';
import firebase from './firebase.js';
import Smoothie from "./Smoothie"

class Smoothielist extends PureComponent {
    constructor() {
        super();
        this.state = {
            items: []
        }

    }
    componentDidMount() {
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    title: items[item].title,
                    red: items[item].red,
                    green: items[item].green,
                    blue: items[item].blue,

                });
            }
            this.setState({
                items: newState
            });
        });
    }
    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }
    render() {

        return (
            <div className="item-container animated bounceIn">
                {this.state.items.map((item) => {
                    return (
                        <Smoothie title={item.title} key={item.id} fill={`rgb(${item.red},${item.green},${item.blue})`}/>
                    )
                })}

            </div>
        );
    }
}

export default Smoothielist;

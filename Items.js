import React, { Component } from 'react';
import Item from './Item'

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
            <div className="item-container animated slideInUp">
                {myItems}
            </div>
        );
    }
}

export default Items;

import React from 'react';

class StyleSelector extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(event) {
        const newStyle = event.target.value;
        this.props.setStyle(newStyle)
    }

    render() {
        return (

            <select onChange={this.handleChange.bind(this)}>
                <option value="traditional">Traditional</option>
                <option value="starwars">Star Wars</option>
            </select>

            )
    }

}


export default StyleSelector;
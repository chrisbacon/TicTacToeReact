import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(event) {
        if (event.target.innerText === "") {
            this.props.changeBoardState(this.props.x, this.props.y)
        } 
    }

    render() {

        const vertClass = ["top", "middle", "bottom"];
        const horzClass = ["left", "center", "right"];

        return(

            <div className={"tile " + horzClass[this.props.x] + " " + vertClass[this.props.y]} onClick={this.handleClick.bind(this)}>
                <span className="tileValue">{this.props.value}</span>
            </div>

            )

    }
}

export default Tile
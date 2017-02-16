import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }
    }

    render() {

        const vertClass = ["top", "middle", "bottom"];
        const horzClass = ["left", "center", "right"];

        return(

            <div className={"tile " + horzClass[this.props.x] + " " +vertClass[this.props.y]}>
                {this.state.value}
            </div>

            )

    }
}

export default Tile
import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(event) {
        console.log(event.target.className) 
        if ((event.target.innerText === "" && event.target.className.includes("tile ")) || (event.target.src === "http://localhost:3000/blank.png" && event.target.className.includes("tileImg")) )  {
            this.props.changeBoardState(this.props.x, this.props.y)
        } 
    }

    render() {

        const vertClass = ["top", "middle", "bottom"];
        const horzClass = ["left", "center", "right"];

        const imgNames = {"": "blank.png", "X": "X.png", "O": "O.png"}

        switch (this.props.style) {
            case "traditional":
            return(

                <div className={"tile " + horzClass[this.props.x] + " " + vertClass[this.props.y]} onClick={this.handleClick.bind(this)}>
                    <span className="tileValue">{this.props.value}</span>
                </div>

                )
            case "starwars":
            return(

                <div className={"tile " + horzClass[this.props.x] + " " + vertClass[this.props.y]} onClick={this.handleClick.bind(this)}>
                    <img className="tileImg" src={"/"+imgNames[this.props.value]}></img>
                </div>

                )

        }

    }
}

export default Tile
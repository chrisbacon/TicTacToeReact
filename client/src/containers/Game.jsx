import React from 'react';

import Tile from '../components/Tile.jsx';

class Game extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            board: [["", "", ""], ["", "", ""], ["", "", ""]]
        }
    }

    render (){
        let count = 0;
        const tiles = this.state.board.map(function(outer, i) {
            return outer.map(function(inner, j) {
                count++
                return <Tile x={i} y={j} key={count}/>
            })
        })
        return (
            <div className='board'>
                {tiles}
            </div>
        )
    }

}

export default Game
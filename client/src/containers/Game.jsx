import React from 'react';

import Tile from '../components/Tile.jsx';

class Game extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            board: [["", "", ""], ["", "", ""], ["", "", ""]],
            currentPlayer: "X"
        }
    }

    changeBoardState(x, y) {
        const newBoard = this.state.board.slice();
        newBoard[x][y] = this.state.currentPlayer;
        switch (this.state.currentPlayer) {
            case "X":
            this.setState({board: newBoard, currentPlayer: "O"})
            break;
            case "O":
            this.setState({board: newBoard, currentPlayer: "X"})
            break;
        }
        
    }

    render (){
        let count = 0;
        let self = this;
        const tiles = this.state.board.map(function(outer, i) {
            return outer.map(function(inner, j) {
                count++
                return <Tile x={i} y={j} value={self.state.board[i][j]} key={count} changeBoardState={self.changeBoardState.bind(self)}/>
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
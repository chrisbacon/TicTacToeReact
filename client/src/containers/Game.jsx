import React from 'react';

import Tile from '../components/Tile.jsx';

class Game extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            board: [["", "", ""], ["", "", ""], ["", "", ""]],
            currentPlayer: "X",
            running: true
        }
    }

    changeBoardState(x, y) {
        if (!this.state.running) { return }

        const newBoard = this.state.board.slice();
        newBoard[x][y] = this.state.currentPlayer;

        this.setState({board:newBoard}, this.checkForWinner.bind(this)(this.state.currentPlayer));

        switch (this.state.currentPlayer) {
            case "X":
            this.setState({currentPlayer: "O"})
            break;
            case "O":
            this.setState({currentPlayer: "X"})
            break;
        }
        
    }

    checkForWinner(player) {
        this.state.running = !(this.checkColumns(player) || this.checkDiagonals(player) || this.checkRows(player));
    }

    checkRows(player) {
        for (let i=0; i<3; i++) {
            const row = [this.state.board[0][i], this.state.board[1][i], this.state.board[2][i]];

            const filteredRow = row.filter(function(tileValue) {
                return tileValue === player;
            })

            if (filteredRow.length === 3) {
                return true;
            }
        }
    }

    checkColumns(player) {
        for (let column of this.state.board) {
            const filteredColumn = column.filter(function(tileValue) {
                return tileValue === player;
            });
            if (filteredColumn.length === 3) {
                return true;
            }
        }
    }

    checkDiagonals(player) {
        return (this.checkLeftDiagonal(player) || this.checkRightDiagonal(player));
    }

    checkLeftDiagonal(player) {
        let diagonal = []
        for (let i = 0; i < 3; i++){
            if (this.state.board[i][i] === player){
                diagonal.push(this.state.board[i][i])
            }
        }

        if (diagonal.length === 3) {
            return true;
        }
    }

    checkRightDiagonal(player) {
        let diagonal = []
        for (let i = 0; i < 3; i++){
            if (this.state.board[2-i][i] === player){
                diagonal.push(this.state.board[2-i][i])
            }
        }

        if (diagonal.length === 3) {
            return true;
        }   
    }

    reset() {
        this.setState({
            board: [["", "", ""], ["", "", ""], ["", "", ""]],
            currentPlayer: "X",
            running: true
        });
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
            <div>
                <div className='board'>
                    {tiles}
                </div>
                <button onClick={this.reset.bind(this)}>
                    New Game
                </button>
            </div>
        )
    }

}

export default Game
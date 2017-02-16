import React from 'react';

import Result from '../components/Result.jsx';
import Score from '../components/Score.jsx';
import StyleSelector from '../components/StyleSelector.jsx'

class Panel extends React.Component {

    constructor(props) {
        super(props);

    }

    render () {

        return (

            <div className="panel">
                <button onClick={this.props.reset}>
                    New Game
                </button>
                <Result winner={this.props.winner} currentPlayer={this.props.currentPlayer}/>
                <Score count={this.props.count}/>
                <StyleSelector setStyle={this.props.setStyle}/>
            </div>

            )

    }

}

export default Panel;
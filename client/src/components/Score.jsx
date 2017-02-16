import React from 'react';

const Score = function(props) {
    return (

        <ul>
            <li>X has won {props.count.X} games.</li>
            <li>O has won {props.count.O} games.</li>
        </ul>

        )
}

export default Score;
import React from 'react';

const Result = function(props) {
    if (props.winner === "") {
        return (
            <p>
                It is {props.currentPlayer}'s turn!!
            </p>

            )
    }
    return (

        <p id="result">
            {props.winner} has won!!
        </p>

        )
}

export default Result;
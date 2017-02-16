var React = require('react');
var ReactDOM = require('react-dom');
import Game from './containers/Game.jsx';

window.onload = function () {
  ReactDOM.render(
    <Game/>,
    document.getElementById('app')
  );
}

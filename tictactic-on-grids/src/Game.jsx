import React, { Component } from 'react';
import './Game.css';
import Grids from './Grids';

class Game extends Component {
	state = {
		grids: 60,
		currentPlayer: 'X',
		winner: null
	};
	reset = () => {
		this.setState({
			currentPlayer: 'X',
			winner: null
		});
	};
	setWinner = player => {
		this.setState({
			winner: player
		});
	};
	changePlayer = player => {
		let nextPlayer = player === 'X' ? 'O' : 'X';
		this.setState({
			currentPlayer: nextPlayer
		});
	};
	setPlayer = val => {
		this.setState({
			currentPlayer: val
		});
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">TicTicToe on Grids</h1>
				</header>
				<Grids
					{...this.state}
					setWinner={this.setWinner}
					changePlayer={this.changePlayer}
					reset={this.reset}
					setPlayer={this.setPlayer}
				/>
			</div>
		);
	}
}

export default Game;

import React, { Component } from 'react';
import { diagnolCheck, verticalHorizontalCheck } from './checkWinner';
import swal from 'sweetalert';
const size = 30;
class Grids extends Component {
	state = {
		X: [],
		O: []
	};
	componentDidMount() {
		this.setPlayer();
		this.drawBoard(this.props.grids);
	}

	setPlayer = () => {
		swal({
			title: 'Which player to start?',
			buttons: {
				O: true,
				X: true
			}
		}).then(val => {
			this.props.setPlayer(val || 'X');
		});
	};
	isIn = (cell, cells) => {
		const exist = cells.filter(c => c[0] === cell[0] && c[1] === cell[1]);
		return exist;
	};
	drawBoard = grids => {
		let bw = grids * size;
		let bh = grids * size;
		let canvas = this.refs.canvas;
		let context = canvas.getContext('2d');
		for (let x = 0; x <= bw; x += size) {
			context.moveTo(0.5 + x, 0);
			context.lineTo(0.5 + x, bh);
		}
		for (let x = 0; x <= bh; x += size) {
			context.moveTo(0, 0.5 + x);
			context.lineTo(bw, 0.5 + x);
		}
		context.strokeStyle = 'black';
		context.font = '25px Do Hyeon';
		context.stroke();
	};
	redrawBoard = grids => {
		let canvas = this.refs.canvas;
		let context = canvas.getContext('2d');
		context.clearRect(0, 0, grids * size, grids * size);
		this.drawBoard(grids);
	};
	alertOccuied = () => {
		swal('This grid is occupied', 'Choose an empty grid.');
	};
	alertWinner = winner => {
		swal(`Winner is ${winner}`, 'Click OK and replay the game!').then(val => {
			this.resetGame(this.props.grids, this.props.currentplayer);
		});
	};

	resetGame = grids => {
		this.setState({
			X: [],
			O: []
		});
		this.redrawBoard(grids);
		this.props.reset(); // winner == null
		this.setPlayer();
	};

	handleClick = event => {
		let player = this.props.currentPlayer;
		let occupied = this.state.X.concat(this.state.O);
		let canvas = this.refs.canvas;
		let context = canvas.getContext('2d');
		let x_cord = Math.trunc(
			(event.clientX - canvas.getBoundingClientRect().left) / size
		);
		let y_cord = Math.trunc(
			(event.clientY - canvas.getBoundingClientRect().top) / size
		);
		let cell = [x_cord, y_cord];
		if (!this.isIn(cell, occupied).length) {
			let cells = this.state[player].slice();
			cells.push(cell);
			context.font = '25px Arial';
			context.fillText(player, x_cord * 30 + 7, y_cord * 30 + 24);
			this.setState(() => {
				if (player === 'X') {
					return { X: cells };
				} else {
					return { O: cells };
				}
			});

			if (diagnolCheck(cells) || verticalHorizontalCheck(cells)) {
				this.props.setWinner(player);
				this.alertWinner(player);
			}
			this.props.changePlayer(player);
		} else {
			this.alertOccuied();
		}
	};

	render() {
		let grids = this.props.grids;
		let player = this.props.currentPlayer;
		return (
			<div className="grids">
				<div className="button-bar">
					<button className="playerInfo">NEXT : {player}</button>
					<button
						className="button-reset"
						onClick={() => this.resetGame(grids)}
					>
						RESTART
					</button>
				</div>
				<canvas
					id="canvas"
					className="canvas"
					ref="canvas"
					width={grids * size}
					height={grids * size}
					onClick={this.handleClick}
				/>
			</div>
		);
	}
}

export default Grids;

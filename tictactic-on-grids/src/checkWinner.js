// create checkWinner function
// which checks
// horizontal, vertical friends
// &  diganoal friends with 4 directions

const checkDuplicate = (coord, founds) => {
	const unique = founds.filter(p => p[0] !== coord[0] && p[1] !== coord[1]);
	return unique;
};
const checkValues = (dArray, clickedPoints) => {
	let counter = 0;
	dArray.forEach(element => {
		clickedPoints.forEach(point => {
			if (element[0] === point[0] && element[1] === point[1]) {
				counter++;
			}
		});
	});
	return counter;
};

// check with frieds in diagnol directions
const diagnolCheck = coords => {
	const clickedPoints = coords;
	let winner = false;
	let pointForCheck;
	// first, find points with potential winning line
	const findPoint = coords => {
		let p1, p2, p3, p4;
		let founds = [];
		coords.forEach(coord => {
			p1 = clickedPoints.find(
				p => coord[0] + 4 === p[0] && coord[1] + 4 === p[1]
			);
			p2 = clickedPoints.find(
				p => coord[0] + 4 === p[0] && coord[1] - 4 === p[1]
			);
			p3 = clickedPoints.find(
				p => coord[0] - 4 === p[0] && coord[1] - 4 === p[1]
			);
			p4 = clickedPoints.find(
				p => coord[0] - 4 === p[0] && coord[1] + 4 === p[1]
			);
			if (p1 && checkDuplicate(p1, founds)) {
				founds.push(p1);
			}
			if (p2 && checkDuplicate(p2, founds)) {
				founds.push(p2);
			}
			if (p3 && checkDuplicate(p3, founds)) {
				founds.push(p3);
			}
			if (p4 && checkDuplicate(p4, founds)) {
				founds.push(p4);
			}
		});
		return founds;
	};
	pointForCheck = findPoint(coords);
	// create arrays of 4 directions filled with
	// points I need to win for each pointForCheck
	pointForCheck.forEach(p => {
		if (winner) return;
		let d_1 = [];
		let d_2 = [];
		let d_3 = [];
		let d_4 = [];
		for (let j = 1; j <= 4; j++) {
			d_1.push([p[0] + 1 * j, p[1] + 1 * j]);
		}
		for (let j = 1; j <= 4; j++) {
			d_2.push([p[0] + 1 * j, p[1] - 1 * j]);
		}
		for (let j = 1; j <= 4; j++) {
			d_3.push([p[0] - 1 * j, p[1] - 1 * j]);
		}
		for (let j = 1; j <= 4; j++) {
			d_4.push([p[0] - 1 * j, p[1] + 1 * j]);
		}
		//check with clicked points
		if (checkValues(d_1, coords) === 4) {
			winner = true;
			return;
		}
		if (checkValues(d_2, coords) === 4) {
			winner = true;
			return;
		}
		if (checkValues(d_3, coords) === 4) {
			winner = true;
			return;
		}
		if (checkValues(d_4, coords) === 4) {
			winner = true;
			return;
		}
	});
	return winner;
};

const verticalHorizontalCheck = coords => {
	const clickedPoints = coords;
	let winner = false;
	let pointForCheck;
	const findPoint = coords => {
		let h1, h2, v1, v2; // h1 to right, h2  to left, v1 to up, v2 to down
		let founds = [];
		const checkDuplicate = coord => {
			const unique = founds.filter(p => p[0] !== coord[0] && p[1] !== coord[1]);
			return unique;
		};
		coords.forEach(coord => {
			h1 = clickedPoints.find(p => coord[0] + 4 === p[0] && coord[1] === p[1]);
			h2 = clickedPoints.find(p => coord[0] - 4 === p[0] && coord[1] === p[1]);
			v1 = clickedPoints.find(p => coord[0] === p[0] && coord[1] + 4 === p[1]);
			v2 = clickedPoints.find(p => coord[0] === p[0] && coord[1] - 4 === p[1]);
			if (h1 && checkDuplicate(h1)) {
				founds.push(h1);
			}
			if (h2 && checkDuplicate(h2)) {
				founds.push(h2);
			}
			if (v1 && checkDuplicate(v1)) {
				founds.push(v1);
			}
			if (v2 && checkDuplicate(v2)) {
				founds.push(v2);
			}
		});
		return founds;
	};
	pointForCheck = findPoint(coords);
	pointForCheck.forEach(p => {
		if (winner) return;
		let d_1 = []; // h1
		let d_2 = []; // h2
		let d_3 = []; // v1
		let d_4 = []; // v2
		for (let j = 1; j <= 4; j++) {
			d_1.push([p[0] + 1 * j, p[1]]);
		}
		for (let j = 1; j <= 4; j++) {
			d_2.push([p[0] - 1 * j, p[1]]);
		}
		for (let j = 1; j <= 4; j++) {
			d_3.push([p[0], p[1] + 1 * j]);
		}
		for (let j = 1; j <= 4; j++) {
			d_4.push([p[0], p[1] - 1 * j]);
		}
		if (checkValues(d_1, coords) === 4) {
			winner = true;
			return;
		}
		if (checkValues(d_2, coords) === 4) {
			winner = true;
			return;
		}
		if (checkValues(d_3, coords) === 4) {
			winner = true;
			return;
		}
		if (checkValues(d_4, coords) === 4) {
			winner = true;
			return;
		}
	});
	return winner;
};

module.exports = { diagnolCheck, verticalHorizontalCheck };

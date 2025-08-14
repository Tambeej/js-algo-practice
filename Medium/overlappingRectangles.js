/*
Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.

Examples
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

Notes
Coordinates can be positive or negative integers.
*/

function overlappingRectangles(rec1, rec2) {
  let xs = [];
  let ys = [];
  for (let angle of rec1) {
    xs.push(angle.x);
    ys.push(angle.y);
  }
  for (let angle of rec2) {
    xs.push(angle.x);
    ys.push(angle.y);
  }

  xs.sort((a, b) => a - b);
  ys.sort((a, b) => a - b);
  return Math.abs(xs[1] - xs[2]) * Math.abs(ys[1] - ys[2]);
}

// console.log.overlappingRectangles(
//   [
//     { x: 2, y: 1 },
//     { x: 5, y: 5 },
//   ],
//   [
//     { x: 3, y: 2 },
//     { x: 5, y: 7 },
//   ]
// );

exports.solution = overlappingRectangles;

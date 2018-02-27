/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function (boxes) {
  const color = [];
  const length = [];
  boxes.forEach((box) => {
    if (color.length && color[color.length - 1] === box) {
      length[length.length - 1] += 1;
    } else {
      color.push(box);
      length.push(1);
    }
  });
  const dp = new Array(color.length);
  for (let i = 0; i < color.length; i++) {
    dp[i] = new Array(color.length);
    for (let j = 0; j < color.length; j++) {
      dp[i][j] = new Array(boxes.length).fill(0);
    }
  }
  function solve(l, r, k) {
    if (l > r) {
      return 0;
    }
    if (dp[l][r][k]) {
      return dp[l][r][k];
    }
    let points = solve(l, r - 1, 0) + (length[r] + k) * (length[r] + k);
    for (let i = l; i < r; i++) {
      if (color[i] === color[r]) {
        points = Math.max(points, solve(l, i, length[r] + k) + solve(i + 1, r - 1, 0));
      }
    }
    dp[l][r][k] = points;
    return points;
  }
  return solve(0, color.length - 1, 0);
};
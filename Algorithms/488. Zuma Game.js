/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */

var simplify = function (board) {
  let reg = /(R{3,}|Y{3,}|B{3,}|G{3,}|W{3,})/g;
  while (reg.test(board)) {
    board = board.replace(reg, '');
  }
  return board;
}

var cache = {};

var findMinStep = function (board, hand) {
  if (!board) {
    return 0;
  }
  if (!hand) {
    return -1;
  }
  if (cache[board + '-' + hand]) {
    return cache[board + '-' + hand];
  }
  const cnt = {};
  for (let i = 0; i < hand.length; i++) {
    cnt[hand[i]] = (cnt[hand[i]] || 0) + 1;
  }
  let ans = -1;
  let num = 1;
  for (let i = 1; i <= board.length; i++) {
    if (i < board.length && board[i] === board[i - 1]) {
      num += 1;
    } else {
      if (num + cnt[board[i - 1]] >= 3) {
        let step = Math.max(0, 3 - num);
        cnt[board[i - 1]] -= step;
        let nboard = simplify(board.slice(0, i - num) + board.slice(i));
        let nhand = Object.keys(cnt).reduce((last, key) => {
          last += (new Array(cnt[key])).fill(key).join('');
          return last;
        }, '');
        let nans = findMinStep(nboard, nhand);
        cnt[board[i - 1]] += step;
        if (nans !== -1 && (ans === -1 || nans + step < ans)) {
          ans = nans + step;
        }
      }
      num = 1;
    }
  }
  cache[board + '-' + hand] = ans;
  return ans;
};
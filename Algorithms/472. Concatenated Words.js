/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  const ans = [];
  const wordSet = new Set(words);
  function search (word) {
    if (wordSet.has(word)) {
      return true;
    }
    for (let i = 1; i < word.length; i++) {
      if (wordSet.has(word.slice(0, i)) && search(word.slice(i))) {
        return true;
      }
    }
    return false;
  }
  words.forEach(word => {
    wordSet.delete(word);
    if (search(word)) {
      ans.push(word);
    }
    wordSet.add(word);
  });
  return ans;
};
/**
 * @constructor
 */
var WordDictionary = function() {
    this.root = {
    	end: false,
    	p: {}
    };
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
	var p = this.root;
	for (var i = 0; i < word.length; i++) {
		if (p.p[word[i]] == undefined) {
			p.p[word[i]] = {
				end: false,
				p: {}
			};
		}
		p = p.p[word[i]];
	}
	p.end = true;
};

var search = function(c, p) {
	if (c.length === 1) {
		if (c === '.') {
			var temp = p.p;
			for (var key in temp) {
				if (temp.hasOwnProperty(key)) {
					if (temp[key].end) {
						return true;
					}
				}
			}
			return false;
		} else if (p.p[c]) {
			return p.p[c].end;
		} else {
			return false;
		}
	} else {
		if (c[0] === '.') {
			var temp = p.p;
			for (var key in temp) {
				if (temp.hasOwnProperty(key)) {
					var p1 = temp[key];
					var c1 = c.slice(1, c.length);
					if (search(c1, p1)) {
						return true;
					}
				}
			}
			return false;
		} else if (p.p[c[0]]) {
			p = p.p[c[0]];
			c = c.slice(1, c.length);
			return search(c, p);
		} else {
			return false;
		}
	}
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    return search(word, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
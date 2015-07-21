/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
    return {
        end: false,
        pointer: {}
    };
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    var p = this.root;
    for (var i = 0; i < word.length; i++) {
        if (!p.pointer[word[i]]) {
            p.pointer[word[i]] = TrieNode();
        }
        p = p.pointer[word[i]];
    }
    p.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var p = this.root;
    for (var i = 0; i < word.length; i++) {
        if (p.pointer[word[i]]) {
            p = p.pointer[word[i]];
        } else {
            return false;
        }
    }
    return p.end;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    var p = this.root;
    for (var i = 0; i < prefix.length; i++) {
        if (p.pointer[prefix[i]]) {
            p = p.pointer[prefix[i]];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */
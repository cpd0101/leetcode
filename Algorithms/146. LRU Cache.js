/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.len = 0;
    this.map = new Map();
    this.time = new Map();
    this.t = -Number.MAX_SAFE_INTEGER;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        this.time.set(key, this.t++);
        return this.map.get(key);
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if (this.map.has(key)) {
        this.time.set(key, this.t++);
        this.map.set(key, value);
    } else {
        if (this.len === this.capacity) {
            var minTime = Infinity;
            var minKey;
            this.time.forEach(function (value, key) {
                if (value < minTime) {
                    minTime = value;
                    minKey = key;
                }
            });
            this.map.delete(minKey);
            this.time.delete(minKey);
            this.time.set(key, this.t++);
            this.map.set(key, value);
        } else {
            this.time.set(key, this.t++);
            this.map.set(key, value);
            this.len++;
        }
    }
};
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.num = 0;
  this.capacity = capacity;
  this.cache = {};
  this.map = {};
  this.time = Number.MIN_SAFE_INTEGER;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  const value = this.cache[key];
  if (value !== undefined) {
    const count = this.map[key] || { num: 0, time: this.time };
    if (++this.time === Number.MAX_SAFE_INTEGER) {
      this.time -= Number.MAX_SAFE_INTEGER;
      Object.keys(this.map).forEach((k) => {
        this.map[k].time -= Number.MAX_SAFE_INTEGER;
      });
    }
    count.num += 1;
    count.time = this.time;
    this.map[key] = count;
    return value;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity < 1) {
    return;
  }
  if (this.cache[key] === undefined) {
    if (this.num === this.capacity) {
      let minNum = Infinity;
      let minTime = Infinity;
      let minKey = key;
      Object.keys(this.map).forEach((k) => {
        if ((this.map[k].num < minNum) || (this.map[k].num === minNum && this.map[k].time < minTime)) {
          minKey = k;
          minTime = this.map[k].time;
          minNum = this.map[k].num;
        }
      });
      if (minKey !== key) {
        delete this.map[minKey];
        delete this.cache[minKey];
      }
    } else {
      ++this.num;
    }
  }
  const count = this.map[key] || { num: 0, time: this.time };
  if (++this.time === Number.MAX_SAFE_INTEGER) {
    this.time -= Number.MAX_SAFE_INTEGER;
    Object.keys(this.map).forEach((k) => {
      this.map[k].time -= Number.MAX_SAFE_INTEGER;
    });
  }
  count.num += 1;
  count.time = this.time;
  this.map[key] = count;
  this.cache[key] = value;
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = Object.create(LFUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
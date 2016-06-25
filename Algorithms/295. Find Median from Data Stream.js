/**
 * @constructor
 */
var MedianFinder = function () {
    this.arr = [];
};

/**
 * @param {integer} word
 * @return {void}
 * Adds a num into the data structure.
 */
MedianFinder.prototype.addNum = function (num) {
    var pos = this.find(num);
    if (this.arr.length < 2) {
        if (this.arr.length && this.arr[0] > num) {
            this.arr.unshift(num);
        } else {
            this.arr.push(num);
        }
    } else if (this.arr[pos + 1] < num) {
        this.arr.splice(pos + 2, 0, num);
    } else if (this.arr[pos] < num) {
        this.arr.splice(pos + 1, 0, num);
    } else {
        this.arr.splice(pos, 0, num);
    }
};

/**
 * @return {double}
 * Return median of current data stream
 */
MedianFinder.prototype.findMedian = function () {
    var mid = parseInt(this.arr.length / 2);
    if (this.arr.length % 2 === 0) {
        return (this.arr[mid] + this.arr[mid - 1]) / 2;
    } else {
        return this.arr[mid];
    }
};

MedianFinder.prototype.find = function (num) {
    var start = 0;
    var end = this.arr.length - 1;
    var mid = 0;
    while (start < end) {
        mid = parseInt((start + end) / 2);
        if (num < this.arr[mid]) {
            end = mid;
        } else if (num > this.arr[mid]) {
            if (start === mid) {
                return mid;
            } else {
                start = mid;
            }
        } else {
            return mid;
        }
    }
    return mid;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var mf = new MedianFinder();
 * mf.addNum(1);
 * mf.findMedian();
 */
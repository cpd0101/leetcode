/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count = 0;
    for (var i = 2; i < n; i++) {
    	if (isPrime(i)) count++;
    }
    return count;
};

var isPrime = function(n) {
	for (var i = 2; i * i <= n; i++) {
		if (n % i === 0) return false;
	}
	return true;
}



/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	if (n < 4) {
		return parseInt((n - 1) / 2);
	}
	var arr = [];
    var count = 2;
    for (var i = 5; i < n; i++) {
    	if (i % 2 !== 0 && i % 3 !== 0 && arr[i] === undefined) {
    		count++;
    		var len = n / i;
    		for (var j = 5; j < len; j += 2) {
    			arr[j * i] = 1;
    		}
    	}
    }
    return count;
};
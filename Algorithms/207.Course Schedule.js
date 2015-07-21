/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var map = [];
    for (var i = 0; i < numCourses; i++) {
    	var temp = new Array(numCourses);
    	map.push(temp);
    }
    var inDegree = new Array(numCourses);
    var outDegree = new Array(numCourses);
    for (var i = 0; i < prerequisites.length; i++) {
    	var temp = prerequisites[i];
    	for (var j = 1; j < temp.length; j++) {
    		if (map[temp[j - 1]][temp[j]]) {
    			map[temp[j - 1]][temp[j]]++;
    		} else {
    			map[temp[j - 1]][temp[j]] = 1;
    		}
    		if (inDegree[temp[j]]) {
    			inDegree[temp[j]]++;
    		} else {
    			inDegree[temp[j]] = 1;
    		}
    		if (outDegree[temp[j - 1]]) {
    			outDegree[temp[j - 1]]++;
    		} else {
    			outDegree[temp[j - 1]] = 1;
    		}
    	}
    }
    var order = [];
    while (order.length < numCourses) {
    	var len = order.length;
    	for (var i = 0; i < numCourses; i++) {
    		if (inDegree[i] || inDegree[i] == -1) continue;
    		order.push(i);
    		inDegree[i] = -1;
    		if (outDegree[i]) {
    			for (var j = 0; j < numCourses; j++) {
					if (map[i][j]) {
						inDegree[j] -= map[i][j];
						map[i][j] = 0;
					}
				}
    		}
    	}
    	if (order.length == len) return false;
    }
    return true;
};
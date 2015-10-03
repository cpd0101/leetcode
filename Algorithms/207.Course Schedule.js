/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
	var node = function(val) {
		this.val = val;
		this.next = null;
	};
	var cs = [];
    for (var i = 0; i < numCourses; i++) {
    	cs.push(new node(i));
    }
    var p = new Array(numCourses);
    var inDegree = new Array(numCourses);
    for (var i = 0; i < prerequisites.length; i++) {
    	var item = prerequisites[i];
    	if (p[item[0]]) {
    		p[item[0]].next = new node(item[1]);
    		p[item[0]] = p[item[0]].next;
    	} else {
    		cs[item[0]].next = new node(item[1]);
    		p[item[0]] = cs[item[0]].next;
    	}
    	if (inDegree[item[1]]) {
    		inDegree[item[1]]++;
    	} else {
    		inDegree[item[1]] = 1;
    	}
    }
    var count = numCourses;
    while(count--) {
    	var flag = true;
    	for (var i = 0; i < numCourses; i++) {
    		if (inDegree[i] == undefined) {
    			inDegree[i] = 0;
    			flag = false;
    			var p = cs[i].next;
    			while (p) {
    				if (--inDegree[p.val] < 1) {
    					inDegree[p.val] = undefined;
    				}
    				p = p.next;
    			}
    			break;
    		}
    	}
    	if (flag) return false;
    }
    return true;
};
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    var res = [];
    while (map['z']) {
        res.push(0);
        map['z']--;
        map['e']--;
        map['r']--;
        map['o']--;
    }
    while (map['w']) {
        res.push(2);
        map['t']--;
        map['w']--;
        map['o']--;
    }
    while (map['u']) {
        res.push(4);
        map['f']--;
        map['o']--;
        map['u']--;
        map['r']--;
    }
    while (map['x']) {
        res.push(6);
        map['s']--;
        map['i']--;
        map['x']--;
    }
    while (map['g']) {
        res.push(8);
        map['e']--;
        map['i']--;
        map['g']--;
        map['h']--;
        map['t']--;
    }
    while (map['o']) {
        res.push(1);
        map['o']--;
        map['n']--;
        map['e']--;
    }
    while (map['t']) {
        res.push(3);
        map['t']--;
        map['h']--;
        map['r']--;
        map['e']--;
        map['e']--;
    }
    while (map['f']) {
        res.push(5);
        map['f']--;
        map['i']--;
        map['v']--;
        map['e']--;
    }
    while (map['v']) {
        res.push(7);
        map['s']--;
        map['e']--;
        map['v']--;
        map['e']--;
        map['n']--;
    }
    while (map['i']) {
        res.push(9);
        map['n']--;
        map['i']--;
        map['n']--;
        map['e']--;
    }
    return res.sort().join('');
};
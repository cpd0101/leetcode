/**
 * @param {string} n
 * @return {string}
 */

var getMax = function (a, b) {
  var result = [a, b];
  //如果a长度小于b长度  
  if (a.length < b.length) {
    //b放前面  
    result[0] = b;
    result[1] = a;
    //返回result长度为3，为了减法的不够减而准备  
    result[2] = 'not';
    //返回最终数组  
    return result;
  }
  //如果a长度等于b长度  
  if (a.length == b.length) {
    //循环对比a,b里面的单个元素  
    for (var i = 0; i < a.length; i++) {
      if (result[0][i] > result[1][i]) {
        result[0] = a;
        result[1] = b;
        return result;
      }
      if (result[0][i] < result[1][i]) {
        result[0] = b;
        result[1] = a;
        result[2] = 'not';
        return result;
      }
      //假如全部相等，当最后一个元素，以上条件都不执行，则执行默认的返回结果  
      if (i == a.length - 1) {
        return result;
      }
    }
  }
  if (a.length > b.length) {
    return result;
  }
}

var shanchuling = function (result) {
  //首先判断是否全部都是0，是的话直接返回一个0  
  if (result == 0) {
    result = 0;
    //返回最终字符串  
    return result;
  }
  //把字符串分割成数组  
  result = result.split('');
  //获取数组长度  
  var hebing = result.length;
  for (var j = 0; j < hebing; j++) {
    //判断数组首位是否为0  
    if (result[0] == 0) {
      //把数组首位删掉  
      result.splice(0, 1);
    }
    else {
      //删除完了就跳出循环  
      break;
    }
  }
  //返回最终字符串  
  return result.join('');
}

var add = function (a, b) {
  //把a,b放进zong数组  
  var zong = [String(a), String(b)];
  //创建fen数组  
  var fen = [];
  //把a,b较大的放在前面  
  zong = getMax(zong[0], zong[1]);
  //把zong数组里面的元素分成单个数字  
  zong[0] = zong[0].split('');
  zong[1] = zong[1].split('');
  //创建加0变量  
  var jialing;
  //判断两个参数是否相同长度  
  if (!(zong[0].length == zong[1].length)) {
    //创建0  
    jialing = new Array(zong[0].length - zong[1].length + 1).join('0');
    //把0放进zong[1]前面  
    zong[1] = jialing.split('').concat(zong[1]);
  }
  //创建补充上一位的数字  
  var next = 0;
  //从个位数起对应单个计算  
  for (var i = (zong[0].length - 1); i >= 0; i--) {
    //求和  
    var he = Number(zong[0][i]) + Number(zong[1][i]) + next;
    //把求和的个位数先放进数组  
    fen.unshift(he % 10);
    //把求和的十位数放进补充上一位的数字，留在下一次循环使用  
    next = Math.floor(he / 10);
    //判断最后一次如果求和的结果为两位数则把求和的十位数加在最前面  
    if (i == 0 && !(next == 0)) {
      fen.unshift(next);
    }
  }
  //把最后的结果转化成字符串  
  var result = fen.join('');
  //返回字符串  
  return result;
}

var sub = function (a, b) {
  var zong = [String(a), String(b)];
  var fen = [];
  zong[0] = zong[0].split('');
  zong[1] = zong[1].split('');
  var jialing;
  if (!(zong[0].length == zong[1].length)) {
    jialing = new Array(zong[0].length - zong[1].length + 1).join('0');
    zong[1] = jialing.split('').concat(zong[1]);
  }
  var next = 0;
  for (var i = (zong[0].length - 1); i >= 0; i--) {
    var cha = Number(zong[0][i]) - Number(zong[1][i]) - next;
    next = 0;
    if (cha < 0) {
      cha = cha + 10;
      next = 1;
    }
    fen.unshift(cha % 10);
  }
  var result = fen.join('');
  if (result[0] == 0) {
    result = shanchuling(result);
  }
  return result;
}

var multi = function (a, b) {
  var zong = [String(a), String(b)];
  var fen = [];
  zong = getMax(zong[0], zong[1]);

  zong[0] = zong[0].split('');
  zong[1] = zong[1].split('');
  //获取b的长度,处理乘法分配率的乘法  
  for (var j = (zong[1].length - 1); j >= 0; j--) {
    var next = 0;
    var fentemp = [];
    var jialing = '';
    //获取a的长度处理乘法  
    for (var i = (zong[0].length - 1); i >= 0; i--) {
      var ji = Number(zong[0][i]) * Number(zong[1][j]) + next;
      fentemp.unshift(ji % 10);
      next = Math.floor(ji / 10);
      if (i == 0 && !(next == 0)) {
        fentemp.unshift(next);
      }
    }
    //后面添加0  
    jialing = new Array((zong[1].length - (j + 1)) + 1).join('0');
    fentemp.push(jialing);
    fen[j] = fentemp.join('');
  }
  //处理乘法后的求和  
  var cishu = fen.length;
  for (var k = 1; k < cishu; k++) {
    var hebing = add(fen[0], fen[1]);
    fen.splice(0, 2, hebing);
  }

  var result = fen.join('');
  if (result[0] == 0) {
    result = shanchuling(result);
  }
  return result;
}

var pow = function (base, e) {
  if (e === 0) {
    return '1';
  }
  let result = String(base);
  for (let i = 1; i < e; i++) {
    result = multi(result, base);
  }
  return result;
}

var smallestGoodBase = function (n) {
  if (n > Number.MAX_SAFE_INTEGER) {
    const maxM = Math.floor(Math.log2(Number(n) + 100000));
    for (let i = maxM; i > 1; i--) {
      const min = Math.floor(Math.pow(Number(n) - 100000, 1 / i));
      const max = Math.floor(Math.pow(Number(n) + 100000, 1 / i));
      for (let k = min; k <= max; k++) {
        let sum = 0;
        for (let j = 0; j <= i; j++) {
          let temp = Math.pow(k, j);
          if (temp > Number.MAX_SAFE_INTEGER) {
            temp = pow(k, j);
          }
          sum = add(sum, temp);
          if (sum == n) {
            return String(k);
          }
        }
      }
    }
    return sub(n, 1);
  } else {
    const maxM = Math.floor(Math.log2(n));
    for (let i = maxM; i > 1; i--) {
      const k = Math.floor(Math.pow(n, 1 / i));
      let sum = 0;
      for (let j = 0; j <= i; j++) {
        sum += Math.pow(k, j);
        if (sum == n) {
          return String(k);
        }
      }
    }
    return String(n - 1);
  }
};
var getStep = function getStep(rows, row, step) {
    var origin = 2*(rows-1);
    var base = (row === 0 || row === rows-1) ? origin : origin - 2*row;
    var flip = (row === 0 || row === rows-1) ? origin : origin - base;

    return (step % 2 === 0) ? base : flip;
  }

  var convert = function convert(str, rows) {
    if (rows <= 1 || rows > str.length) { return str; }

    var result = '';
    for (var i = 0; i < rows; i++) {

      var step = 0;
      var j = i;
      var rowResult = '';

      while (j < str.length) {
        rowResult += str[j];
        j += getStep(rows, i, step);
        step++;
      }

      result += rowResult;
    }
    return result;
  }

let s = "PAYPALISHIRING";

console.log(convert(s,4));
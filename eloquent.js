function min() {
  var args = Array.from(arguments);
  if (args.length > 0) {
    var result = args[0]
    var i = 1;
    while (i < args.length) {
      if (args[i] < result) {
        result = args[i]
      }
      i ++;
    }
    return result;
  }
}

function isEven(number) {
  switch (number) {
    case 0:
      return true;
      break;
    case 1:
      return false;
      break;
    default:
      if (number > 0) {
        return isEven(number - 2);
      }
      return isEven(number + 2);
      break;
  }
}

function countBs(str) {
  var total = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "B") {
      total ++;
    }
  }
  return total;
}

function countChar(str,char) {
  var total = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      total ++;
    }
  }
  return total;
}

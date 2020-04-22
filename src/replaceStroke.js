module.exports = function replaceStroke(str) {
  return str.replace(/stroke=(".*?")/gm, function (match, color) {
    return 'stroke={props.stroke || ' + color + '}';
  });
};

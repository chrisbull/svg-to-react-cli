module.exports = function replaceFill(str) {
  return str.replace(/fill=(".*?")/gm, function (match, color) {
    return 'fill={props.fill || ' + color + '}';
  });
};

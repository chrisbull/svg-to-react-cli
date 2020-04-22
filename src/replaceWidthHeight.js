module.exports = function replaceFill(str) {
  return str.replace(/(width|height)=(".*?")/gm, function (match, key, value) {
    return `${key}={props.${key} || ${value}}`;
  });
};

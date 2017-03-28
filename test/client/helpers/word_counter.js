const count = (string, char) => {
  var re = new RegExp(char, 'gi')
  return string.match(re).length
}

module.exports = count

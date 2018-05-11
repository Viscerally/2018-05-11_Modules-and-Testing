var time = require("./time");
var leftpad = require('left-pad');

var input = process.argv[2];

var result = time.hasTime(Number(input));

console.log(leftpad(result, 50, "🤗"));

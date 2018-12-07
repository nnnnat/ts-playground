"use strict";
exports.__esModule = true;
var utils_1 = require("./lib/utils");
function hey(word) {
    return "hey " + word;
}
console.log(hey("dude"), utils_1.activeDate({ startDate: new Date("2018-12-01"), endDate: new Date("2018-12-10") }));

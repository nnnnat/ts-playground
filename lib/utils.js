"use strict";
exports.__esModule = true;
var TODAY = new Date();
exports.activeDate = function (_a) {
    var endDate = _a.endDate, startDate = _a.startDate;
    return (TODAY > startDate && TODAY < endDate);
};

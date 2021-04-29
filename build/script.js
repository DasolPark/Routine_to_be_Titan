"use strict";
var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
function getDay() {
    return DAYS[new Date().getDay()];
}
var Header = function () {
    return "\n      <ul>\n        " + DAYS.map(function (day) { return "<li>" + day + "</li>"; }).join('') + "\n      </ul>\n    ";
};
var headerEl = document.querySelector('#header');
if (headerEl) {
    headerEl.innerHTML = Header();
}
//# sourceMappingURL=script.js.map
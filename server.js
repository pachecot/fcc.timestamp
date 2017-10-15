var express = require("express");
var app = express();

var Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
].reduce(function (a, v, i) {
    a[v] = i;
    return a;
}, {});

var getDateInfo = function (d) {
    return {
        "unix": d.valueOf() / 1000,
        "natural": Months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()
    };
};

var fromUnix = function (v) { return new Date(v); }
var fromString = function (v) { return new Date(v); }
var parseDate = function (id) {
    var v = Number.parseInt(id);
    return isNaN(v) ?
        fromString(id) : fromUnix(v * 1000);
}

app.get('/:id?', function (req, res) {
    var id = req.params.id;
    if (!id) {
        res.send();
    }
    else {
        var d = parseDate(id);
        res.send(getDateInfo(d));
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

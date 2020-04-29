// import { processData } from "./processData";
var fs = require('fs');
var processData = function (allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            var tarr = [];
            for (var j = 0; j < headers.length; j++) {
                tarr.push(headers[j] + ":" + data[j]);
            }
            lines.push(tarr);
        }
    }
};
(function () {
    fs.readFileSync("D:\\Benutzer\\Manuel\\Repos\\tcsv\\file.csv", function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
        processData(data);
    });
})();
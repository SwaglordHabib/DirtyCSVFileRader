var http = require('http');

http.createServer(function (req, res) {
    console.log("Test");
    
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
        console.log(lines);
        console.log(headers);
        // TODO: Put your code here
        
    };
    function read() {
        var data = fs.readFileSync("D:\\Benutzer\\Manuel\\Repos\\tcsv\\file.csv","utf-8")
        processData(data);
    };
    read();
    res.end("End");
}).listen(8080);
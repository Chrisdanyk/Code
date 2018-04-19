var http = require("http");
var dt = require("./date");
var url = require("url");
var fs = require("fs");
var events = require("events");
//var nodemailer = require('nodemailer');
var eventEmitter = new events.EventEmitter();
var formidable = require("formidable");
var mysql = require('mysql');

var eventEmitterHandler = function () {
    console.log("scream event detected");
};
http.createServer(function (request, response) {
    //querry(response, request);
    //readfile(response);
    //appendf();
    //openf();
    // writef();
    // deletef();
    // renamef();
    //eventFile();
    //ownEvent();
    //fileUp(response, request);
    // sendMail();
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "dell",
        database: "nodesql"
    });
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");

        var alt = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
        var ins = "INSERT INTO customers (name, address) VALUES ('Chris dany', 'Highway 37')";
        var sel = "SELECT  name, address FROM customers";
        var multinsert = "INSERT INTO customers (name, address) VALUES ?";
        var values = [
            ['John', 'Highway 71'],
            ['Peter', 'Lowstreet 4'],
            ['Amy', 'Apple st 652'],
            ['Hannah', 'Mountain 21'],
            ['Michael', 'Valley 345'],
            ['Sandy', 'Ocean blvd 2'],
            ['Betty', 'Green Grass 1'],
            ['Richard', 'Sky st 331'],
            ['Susan', 'One way 98'],
            ['Vicky', 'Yellow Garden 2'],
            ['Ben', 'Park Lane 38'],
            ['William', 'Central st 954'],
            ['Chuck', 'Main Road 989'],
            ['Viola', 'Sideway 1633']
        ];
        con.query(ins, function (err, result,field) {
            if (err) {
                throw err;
            } else {
                console.log(result);
            }
        });

    });



}).listen(8080);

function sendMail() {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'chrisdany9@gmail.com',
            pass: 'yourpassword'
        }
    });
    var mailOptions = {
        from: 'chrisdany9@gmail.com',
        to: 'chris.kakasu@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });
}

function fileUp(response, request) {
    if (request.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(request, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                response.write('File uploaded and moved!');
                response.end();
            });

        });
    } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        response.write('<input type="file" name="filetoupload"><br>');
        response.write('<input type="submit">');
        response.write('</form>');
        return response.end();
    }

}


function ownEvent() {

    eventEmitter.emit("scream");
    eventEmitter.on("scream", eventEmitterHandler);
}

function eventFile() {
    var rs = fs.createReadStream("test.txt");
    rs.on("open", function () {
        console.log("file opened!!!!!");
    });
}

function renamef() {
    fs.rename('file.txt', 'test.txt', function (err) {
        if (err)
            throw err;
        console.log('File Renamed!');
    });
}

function deletef() {
    fs.unlink("filex.txt", function (err) {
        if (err)
            throw err;
        console.log("file deleted");
    });
}

function writef() {
    fs.writeFile("file.txt", "the end>>>>", function (err) {
        if (err)
            throw err;
        console.log("file saved");
    });
}

function openf() {
    fs.open("open.txt", "w", function (err, file) {
        if (err)
            throw err;
        console.log("file created and saved.");
    });
}

function appendf() {
    fs.appendFile("filex.txt", "//////////????", function (err) {
        if (err)
            throw err;

        console.log("file created and saved.");

    });
}

function readfile(response) {
    fs.readFile("main.html", function (err, data) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
    });
}

function querry(response, request) {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write("The date and time are currently: " + dt.myDateTime());
    //response.end("It works!!!!!!!");
    //response.end(request.url);
    //var q = url.parse(request.url, true).query;
    //response.end(q.year)
    var q = url.parse(request.url, true).query;
    var txt = q.month + " " + q.year;
    response.end(txt);
}


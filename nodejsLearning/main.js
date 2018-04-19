//var nodemailer = require("nodemailer");
var fs = require('fs');


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
        to: 'chris.kakasu@gmail.com, benjkafirongo@gmail.com',
        subject: 'Sending Email using Node.js',
        //text: 'That was easy!' 
        html: "<p><em>That was easy!!!</em></p>"
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
//sendMail();
var rs = fs.createReadStream('test.txt');
rs.on("open", function () {
    console.log("file opened>>>>");

})
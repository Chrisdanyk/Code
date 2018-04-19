var http = require('http');
var url = require('url');
var querystring = require('querystring');
var EventEmitter = require("events").EventEmitter;
var express = require('express');
var app = express();

var direBonjour = require("./testmodule");
var direBye = require("./testmodule");

var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    var q = url.parse(req.url).query;
    var qs = querystring.parse(q);
    console.log(page);
    res.writeHead(200, { "content-Type": "text/html" });

    if (page == '/') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi!');
    }
    else if (page == '/etage/1/chambre') {
        res.write('Hé ho, c\'est privé ici !');
    }
    res.end();

   

});

server.listen(8080);


function eventClose() {
    server.on('close', function () {
        console.log("server closed!!!!!");
    });
    server.close();
}

function eventGameover() {
    var jeu = new EventEmitter();
    jeu.on('gameover', function (message) {
        console.log(message);
    });
    jeu.emit('gameover', 'Vous avez perdu !');
}

function eventSorry() {
    var x = new EventEmitter();
    x.on("sorry", function (message) {
        console.log(message);
    });
    x.emit("sorry", "oh lala so sorry!!!!!!!!!!");
}
direBonjour.direBonjour();
//eventGameover();
//eventSorry();
//eventClose();

var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    var url = req.url;

    if (url === "/") {
      fs.readFile("home.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/profil") {
      fs.readFile("profil.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/sambutan") {
      fs.readFile("sambutan.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/about") {
      fs.readFile("about.html", function (err, data) {
        res.end(data);
      });
    } else if (url === "/perpus") {
      fs.readFile("assets/naruto.pdf", (err, data) => {
        if (err) throw err;

        // send respon
        res.writeHead(200, { "Content-Type": "application/pdf" });
        res.write(data);
        res.end();
      });
    } else {
      res.write("");
      res.end();
    }
  })
  .listen(1100, function () {
    console.log("server start at http://localhost:1100");
  });

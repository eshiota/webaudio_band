var express = require("express")
  , app = express()
  , server = require("http").createServer(app)
  , path = require("path")
  , availableInstruments = []
  , io
;

server.listen(3000);

app.use(express.static(__dirname + "/public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("index");
});

app.get("/admin", function(req, res) {
  // Try to prevent people at conference from being smart. =P
  if (req.query.key !== "g4rbVcBTVfMFMf4GeZFTjxheBqgAQbc5nJGqef5UtvBZFth8") {
    res.redirect("/");
    return true;
  }

  setupSockets();

  res.render("admin");
});

function setupSockets () {
  if (!io) {
    io = require("socket.io").listen(server);
  }

  availableInstruments = [];

  io.sockets.on("connection", function (socket) {
    var socketInstrument;

    io.sockets.emit("instruments available", availableInstruments);

    socket.on("request instruments", function (data) {
      socket.emit("instruments available", availableInstruments);
    });

    socket.on("new instrument", function (instrument) {
      availableInstruments.push(instrument);
      io.sockets.emit("instruments available", availableInstruments);
    });

    socket.on("instrument select", function (id) {
      var instrument = findInstrumentById(id);

      socketInstrument = instrument;

      instrument.connected = true;

      io.sockets.emit("instruments available", availableInstruments);
      io.sockets.emit("instrument connect", instrument);
    });

    socket.on("instrument play", function (data) {
      io.sockets.emit("instrument played", data);
    });

    socket.on("instrument stop", function (data) {
      io.sockets.emit("instrument stopped", data);
    });

    socket.on("disconnect", function () {
      if (socketInstrument) {
        socketInstrument.connected = false;
        io.sockets.emit("instrument disconnect", socketInstrument);
        io.sockets.emit("instruments available", availableInstruments);
        socketInstrument = null;
      }
    });
  });
}

function findInstrumentById (id) {
  for (var i = 0; i < availableInstruments.length; i++) {
    if (availableInstruments[i].id === id) {
      return availableInstruments[i];
    }
  }
}

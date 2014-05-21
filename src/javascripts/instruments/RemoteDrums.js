Module("WAB.instruments.RemoteDrums", function (RemoteDrums) {

  RemoteDrums.fn.initialize = function (args) {
    this.element = args.element;
    this.id = this.getRandomId();
    this.drums = Module.run("WAB.instruments.Drums", [args]);

    WAB.socket.emit("new instrument", {
      name : "Drums",
      type : "drums",
      id : this.id
    });

    WAB.socket.on("instrument connect", this.onInstrumentConnect.bind(this));
    WAB.socket.on("instrument disconnect", this.onInstrumentDisconnect.bind(this));
    WAB.socket.on("instrument played", this.onInstrumentPlay.bind(this));
  };

  RemoteDrums.fn.getRandomId = function () {
    return Math.random().toString(36).slice(2);
  };

  RemoteDrums.fn.onInstrumentConnect = function (instrument) {
    if (instrument.id === this.id) {
      this.element.byData("status").html("Connected");
    }
  };

  RemoteDrums.fn.onInstrumentDisconnect = function (instrument) {
    if (instrument.id === this.id) {
      this.element.byData("status").html("Awaiting connection");
    }
  };

  RemoteDrums.fn.onInstrumentPlay = function (data) {
    this.drums.play(data.sound);
  };

});
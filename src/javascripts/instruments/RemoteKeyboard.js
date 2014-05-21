Module("WAB.instruments.RemoteKeyboard", function (RemoteKeyboard) {

  var accidentsMap = {
    "G#" : "Ab",
    "A#" : "Bb",
    "C#" : "Db",
    "D#" : "Eb",
    "F#" : "Gb"
  };

  var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

  $.extend(RemoteKeyboard, WAB.SoundsMapLoader);

  $.extend(RemoteKeyboard.fn, WAB.instruments.Instrument.fn);

  RemoteKeyboard.soundsMap = {};

  // TODO: not pretty, extract this and BassSequencer behavior to common pattern
  for (var i = 0; i < notes.length; i++) {
    RemoteKeyboard.soundsMap[notes[i] + 5] = "/sounds/strings/" +
      (accidentsMap[notes[i]] ? accidentsMap[notes[i]] : notes[i]) + "5.mp3";
  }

  RemoteKeyboard.fn.initialize = function (args) {
    this.plugin(args.audioContext, args.exitNode);

    this.element = args.element;

    this.id = this.getRandomId();
    this.playingSounds = {};

    WAB.socket.emit("new instrument", {
      name : "Keyboard",
      type : "keyboard",
      id : this.id
    });

    WAB.socket.on("instrument connect", this.onInstrumentConnect.bind(this));
    WAB.socket.on("instrument disconnect", this.onInstrumentDisconnect.bind(this));
    WAB.socket.on("instrument played", this.onInstrumentPlay.bind(this));
    WAB.socket.on("instrument stopped", this.onInstrumentStop.bind(this));
  };

  RemoteKeyboard.fn.getRandomId = function () {
    return Math.random().toString(36).slice(2);
  };

  RemoteKeyboard.fn.onInstrumentConnect = function (instrument) {
    if (instrument.id === this.id) {
      this.element.byData("status").html("Connected");
    }
  };

  RemoteKeyboard.fn.onInstrumentDisconnect = function (instrument) {
    if (instrument.id === this.id) {
      this.element.byData("status").html("Awaiting connection");
    }
  };

  RemoteKeyboard.fn.onInstrumentPlay = function (data) {
    this.play(data.sound);
  };

  RemoteKeyboard.fn.onInstrumentStop = function (data) {
    this.stop(data.sound);
  };

  RemoteKeyboard.fn.play = function (sound) {
    var source = this.audioContext.createBufferSource();

    source.buffer = RemoteKeyboard.sounds[sound];
    source.connect(this.gainNode);
    source.start(0);

    this.playingSounds[sound] = source;
  };

  RemoteKeyboard.fn.stop = function (sound) {
    if (this.playingSounds[sound]) {
      this.playingSounds[sound].stop(0);
      delete this.playingSounds[sound];
    }
  };

});
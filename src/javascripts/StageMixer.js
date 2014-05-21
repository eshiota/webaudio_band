// Handles all instruments currently in stage

Module("WAB.StageMixer", function (StageMixer) {

  $.extend(StageMixer.fn, EventEmitter.prototype);

  StageMixer.fn.initialize = function (interface) {
    if (interface === "admin") {
      this.audioContext = new webkitAudioContext();
      this.exit = this.audioContext.createGainNode();
      this.looper = Module.run("WAB.Looper");

      this.exit.gain.value = 1;
      this.exit.connect(this.audioContext.destination);

      this.loadBuffers();
    } else {
      WAB.Mediator.trigger("load-buffers-done");
    }

    WAB.Mediator.on("sequencer-play", this.looper.start.bind(this.looper));
    WAB.Mediator.on("sequencer-pause", this.looper.pause.bind(this.looper));
    WAB.Mediator.on("sequencer-stop", this.looper.stop.bind(this.looper));
    WAB.Mediator.on("sequencer-tempo-change", this.looper.setSpeed.bind(this.looper));
  };

  StageMixer.fn.loadBuffers = function () {
    $.when(
      WAB.instruments.Drums.loadSounds(this.audioContext),
      WAB.instruments.DrumSequencer.loadSounds(this.audioContext),
      WAB.instruments.BassSequencer.loadSounds(this.audioContext),
      WAB.instruments.RemoteKeyboard.loadSounds(this.audioContext)
    ).then(function () {
      WAB.Mediator.trigger("load-buffers-done");
    });
  };

  StageMixer.fn.plugNewInstrument = function (instrument, element) {
    // TODO: Improve this
    if (instrument === "drum_sequencer") {
      Module.run("WAB.instruments.DrumSequencer", [this.audioContext, this.exit, this.looper, element]);
    } else if (instrument === "synth_sequencer") {
      Module.run("WAB.instruments.SynthSequencer", [this.audioContext, this.exit, this.looper, element]);
    } else if (instrument === "bass_sequencer") {
      Module.run("WAB.instruments.BassSequencer", [this.audioContext, this.exit, this.looper, element]);
    } else if (instrument === "remote_drums") {
      Module.run("WAB.instruments.RemoteDrums", [this.audioContext, this.exit, element]);
    } else if (instrument === "remote_keyboard") {
      Module.run("WAB.instruments.RemoteKeyboard", [this.audioContext, this.exit, element]);
    }
  };

});
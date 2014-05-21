Module("WAB.instruments.Instrument", function (Instrument) {

  Instrument.fn.plugin = function (audioContext, exitNode) {
    if (this.gainNode) {
      throw "This instrument has already been plugged in.";
    }

    this.audioContext = audioContext;
    this.exitNode = exitNode;
    this.gainNode = this.audioContext.createGainNode();
    this.gainNode.gain.value = 1;
    this.gainNode.connect(this.exitNode);
  };

  Instrument.fn.plugout = function () {
    if (!this.gainNode) {
      throw "This instrument hasn't been plugged in yet.";
    }

    this.gainNode.disconnect(this.exitNode);
  };

});
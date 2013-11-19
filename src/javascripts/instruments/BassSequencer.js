Module("WAB.instruments.BassSequencer", function (BassSequencer) {

  var accidentsMap = {
    "G#" : "Ab",
    "A#" : "Bb",
    "C#" : "Db",
    "D#" : "Eb",
    "F#" : "Gb"
  };

  var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

  $.extend(BassSequencer, WAB.SoundsMapLoader);

  $.extend(BassSequencer.fn, WAB.instruments.Sequencer.fn);

  BassSequencer.soundsMap = {};

  // TODO: not pretty =P
  for (var i = 0; i < notes.length; i++) {
    BassSequencer.soundsMap[notes[i] + 2] = "/sounds/bass/" +
      (accidentsMap[notes[i]] ? accidentsMap[notes[i]] : notes[i]) + "2.mp3";
  }

  // @audioContext The application's audio context
  // @node         Audio exit node
  // @looper       Application looper that syncs all beats
  // @element      DOM node with graphical representation of sequencer
  BassSequencer.fn.initialize = function (audioContext, exitNode, looper, element) {
    WAB.instruments.Sequencer.fn.initialize.apply(this, arguments);

    this.gainNode.gain.value = 1;
  };

  BassSequencer.fn.playSound = function (sound) {
    var source = this.audioContext.createBufferSource();

    source.buffer = BassSequencer.sounds[sound];
    source.connect(this.gainNode);
    source.start(0);
    source.stop(this.audioContext.currentTime + (this.looper.positionDuration * 2 / 1000));
  };

});
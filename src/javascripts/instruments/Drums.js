Module("WAB.instruments.Drums", function (Drums) {

  $.extend(Drums, WAB.SoundsMapLoader);

  $.extend(Drums.fn, WAB.instruments.PlayableWithKeys.fn);

  $.extend(Drums.fn, WAB.instruments.Instrument.fn);

  Drums.soundsMap = {
    "snare" : "/sounds/drums/snare.wav",
    "kick"  : "/sounds/drums/kick.wav",
    "tom_hi" : "/sounds/drums/tom_hi.wav",
    "tom_low" : "/sounds/drums/tom_low.wav",
    "hihat_closed" : "/sounds/drums/hihat_closed.wav",
    "hihat_open" : "/sounds/drums/hihat_open.wav",
    "trash" : "/sounds/drums/trash.wav"
  };

  Drums.keyMap = {
    "32" : "kick",
    "67" : "snare"
  };

  // @audioContext The application's audio context
  // @node         Audio exit node
  Drums.fn.initialize = function (audioContext, exitNode, element) {
    this.plugin(audioContext, exitNode);

    this.mapKeysToSounds(Drums.keyMap);

    if (element) {
      this.mapElementsToSounds(Drums.elementMap);
    }
  };

  Drums.fn.play = function (sound) {
    var source = this.audioContext.createBufferSource();

    source.buffer = Drums.sounds[sound];
    source.connect(this.gainNode);
    source.start(0);
  };

});

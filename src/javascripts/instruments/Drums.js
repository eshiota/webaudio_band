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

  Drums.fn.initialize = function (args) {
    this.plugin(args.audioContext, args.exitNode);

    this.mapKeysToSounds(Drums.keyMap);
  };

  Drums.fn.play = function (sound) {
    var source = this.audioContext.createBufferSource();

    source.buffer = Drums.sounds[sound];
    source.connect(this.gainNode);
    source.start(0);
  };

});

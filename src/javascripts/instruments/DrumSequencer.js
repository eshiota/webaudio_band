Module("WAB.instruments.DrumSequencer", function (DrumSequencer) {

  $.extend(DrumSequencer, WAB.SoundsMapLoader);

  $.extend(DrumSequencer.fn, WAB.instruments.Sequencer.fn);

  DrumSequencer.soundsMap = {
    "snare" : "/sounds/drums/snare.wav",
    "kick"  : "/sounds/drums/kick.wav",
    "tom_hi" : "/sounds/drums/tom_hi.wav",
    "tom_low" : "/sounds/drums/tom_low.wav",
    "hihat_closed" : "/sounds/drums/hihat_closed.wav",
    "hihat_open" : "/sounds/drums/hihat_open.wav",
    "trash" : "/sounds/drums/trash.wav"
  };

  DrumSequencer.fn.initialize = function () {
    WAB.instruments.Sequencer.fn.initialize.apply(this, arguments);
  };

  DrumSequencer.fn.playSound = function (sound) {
    var source = this.audioContext.createBufferSource();

    source.buffer = DrumSequencer.sounds[sound];
    source.connect(this.gainNode);
    source.start(0);
  };

});

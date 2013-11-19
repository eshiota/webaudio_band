Module("WAB.instruments.SynthSequencer", function (SynthSequencer) {

  $.extend(SynthSequencer.fn, WAB.instruments.Sequencer.fn);

  // @audioContext The application's audio context
  // @node         Audio exit node
  // @looper       Application looper that syncs all beats
  // @element      DOM node with graphical representation of sequencer
  SynthSequencer.fn.initialize = function (audioContext, exitNode, looper, element) {
    WAB.instruments.Sequencer.fn.initialize.apply(this, arguments);

    this.overdrive = new Overdrive(this.audioContext, {
      preBand: 0.5,
      color: 16600,
      drive: 1.0,
      postCut: 21200
    });

    this.gainNode.gain.value = 0.15;
  };

  SynthSequencer.fn.playSound = function (note) {
    var frequency = this.getFrequency(note)
      , oscillator = this.audioContext.createOscillator()
      , startMethod = oscillator.start || oscillator.noteOn
      , stopMethod = oscillator.stop || oscillator.noteOff
    ;

    oscillator.type = "sawtooth";
    oscillator.frequency.value = frequency;
    oscillator.connect(this.overdrive.input);
    this.overdrive.connect(this.gainNode);
    startMethod.call(oscillator, 0);
    stopMethod.call(oscillator, this.audioContext.currentTime + (this.looper.positionDuration / 1000));
  };

  // https://gist.github.com/stuartmemo/3766449
  // Takes string of Note + Octave
  // Example:
  // var frequency = Oscillator.getFrequency('C3');
  SynthSequencer.fn.getFrequency = function (note) {
    var notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
      , octave
      , keyNumber
    ;

    if (note.length === 3) {
      octave = note.charAt(2);
    } else {
      octave = note.charAt(1);
    }

    keyNumber = notes.indexOf(note.slice(0, -1));

    if (keyNumber < 3) {
      keyNumber = keyNumber + 12 + ((octave - 1) * 12) + 1;
    } else {
      keyNumber = keyNumber + ((octave - 1) * 12) + 1;
    }

    // Return frequency of note
    return Math.floor(440 * Math.pow(2, (keyNumber - 49) / 12));
  };

});

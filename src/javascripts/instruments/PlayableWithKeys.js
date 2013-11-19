Module("WAB.instruments.PlayableWithKeys", function (PlayableWithKeys) {

  PlayableWithKeys.fn.mapKeysToSounds = function (keymap) {
    $(window).on("keydown", (function (e) {
      var sound = keymap[e.which];

      if (sound) {
        e.preventDefault();
        this.play(sound);
      }
    }).bind(this));
  };

});

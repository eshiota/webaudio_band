Module("WAB.controls.DrumsControl", function (DrumsControl) {

  $.extend(DrumsControl.fn, WAB.instruments.PlayableWithKeys.fn);

  var keyMap = {
    "32" : "kick",
    "67" : "snare",
    "86" : "tom_hi",
    "66" : "tom_low",
    "70" : "hihat_closed",
    "71" : "hihat_open",
    "72" : "trash"
  };

  DrumsControl.fn.initialize = function (element, id) {
    this.element = element;
    this.id = id;

    this.element.on("click", "button", this.onButtonClick.bind(this));

    this.mapKeysToSounds(keyMap);
  };

  DrumsControl.fn.onButtonClick = function (event) {
    var sound = $(event.target).data("instrument");

    this.play(sound);
  };

  DrumsControl.fn.play = function (sound) {
    WAB.socket.emit("instrument play", {
      instrument : "drums",
      sound : sound,
      id : this.id
    });
  };

});
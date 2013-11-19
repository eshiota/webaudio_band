Module("WAB.controls.KeyboardControl", function (KeyboardControl) {

  KeyboardControl.fn.initialize = function (element, id) {
    this.element = element;
    this.id = id;

    this.keyboard = new qwertyHancock({
      id: "keyboard-" + this.id,
      width: 480,
      height: 150,
      octaves: 1,
      startNote: "C5",
      whiteNotesColour: "white",
      blackNotesColour: "black",
      hoverColour: "#f3e939",
      keyboardLayout: "en"
    });

    this.keyboard.keyDown((function (note, frequency) {
      this.play(note);
    }).bind(this));

    this.keyboard.keyUp((function (note, frequency) {
      this.stop(note);
    }).bind(this));
  };

  KeyboardControl.fn.play = function (sound) {
    WAB.socket.emit("instrument play", {
      instrument : "keyboard",
      sound : sound,
      id : this.id
    });
  };

  KeyboardControl.fn.stop = function (sound) {
    WAB.socket.emit("instrument stop", {
      instrument : "keyboard",
      sound : sound,
      id : this.id
    });
  };

});
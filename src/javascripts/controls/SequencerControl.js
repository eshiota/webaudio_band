Module("WAB.controls.SequencerControl", function (Control) {

  Control.fn.initialize = function (element) {
    this.element = element;
    this.play = this.element.byData("sequencer-play");
    this.stop = this.element.byData("sequencer-stop");
    this.pause = this.element.byData("sequencer-pause");
    this.changeTempo = this.element.byData("change-tempo");

    this.play.on("click", (function () {
      WAB.Mediator.trigger("sequencer-play");
    }).bind(this));

    this.stop.on("click", (function () {
      WAB.Mediator.trigger("sequencer-stop");
    }).bind(this));

    this.pause.on("click", (function () {
      WAB.Mediator.trigger("sequencer-pause");
    }).bind(this));

    this.changeTempo.on("click", (function () {
      var tempo = this.element.byData("tempo").val();

      this.element.byData("current-tempo").text(tempo);

      WAB.Mediator.trigger("sequencer-tempo-change", [tempo]);
    }).bind(this));
  };

});
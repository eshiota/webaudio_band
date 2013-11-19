Module("WAB.controls.NewInstrumentsControl", function (Control) {

  Control.fn.initialize = function (element) {
    this.element = element;
    this.select = this.element.byData("select-new-instrument");

    this.element.byData("add-new-instrument").on("click", (function () {
      WAB.Mediator.trigger("add-new-instrument", [this.select.val()]);
    }).bind(this));
  };

});
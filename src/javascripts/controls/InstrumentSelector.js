Module("WAB.controls.InstrumentSelector", function (Selector) {

  var templateMap = {
    "drums" : "remote_drums_selector"
  };

  Selector.fn.initialize = function (element) {
    this.element = element;

    WAB.socket.on("instruments available", this.onInstrumentsAvailable.bind(this));
    WAB.socket.on("instrument disconnect", this.onInstrumentDisconnect.bind(this));

    // Request fresh data from server
    WAB.socket.emit("request instruments");

    this.element.on("click", "button", this.onInstrumentSelect.bind(this));
  };

  Selector.fn.onInstrumentsAvailable = function (instruments) {
    var html = [];

    if (instruments.length === 0) {
      html.push(WAB.templates["empty_selector"]());
    } else {
      for (var i = 0; i < instruments.length; i++) {
        html.push(WAB.templates["remote_instrument_selector"](instruments[i]));
      }
    }

    this.element.html(html.join(""));
  };

  Selector.fn.onInstrumentSelect = function (event) {
    var button = $(event.target)
      , instrument = {
        type : button.data("instrument-type"),
        id   : button.data("instrument-id")
      }
    ;

    WAB.socket.emit("instrument select", instrument.id);

    this.selectedInstrumentId = instrument.id;

    this.hide();

    WAB.Mediator.trigger("instrument-selected", [instrument]);
  };

  Selector.fn.onInstrumentDisconnect = function (instrument) {
    if (instrument.id === this.selectedInstrumentId) {
      this.show();
    }
  };

  Selector.fn.show = function () {
    // TODO: avoid using .closest
    this.element.closest(".instrument-selector-track").slideDown("fast");
  };

  Selector.fn.hide = function () {
    this.element.closest(".instrument-selector-track").slideUp("fast");
  };

});
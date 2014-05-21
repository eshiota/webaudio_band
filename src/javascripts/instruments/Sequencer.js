Module("WAB.instruments.Sequencer", function (Sequencer) {

  $.extend(Sequencer.fn, WAB.instruments.Instrument.fn);

  Sequencer.fn.initialize = function (audioContext, exitNode, looper, element) {
    this.plugin(audioContext, exitNode);

    this.looper = looper;
    this.element = element;
    this.elementHeaders = this.element.find("th");

    this.parseSequencer();

    this.element.on("click", "[data-switch]", this.onSwitchClick.bind(this));

    this.looper.on("position-change", this.renderPosition.bind(this));
    this.looper.on("loop-stop", this.clearInterface.bind(this));
  };

  Sequencer.fn.onSwitchClick = function (event) {
    var status = $(event.target).data("switch");

    $(event.target)
      .text(status === 0 ? "On" : "Off")
      .attr("data-switch", status === 0 ? 1 : 0)
      .data("switch", status === 0 ? 1 : 0);

    this.parseSequencer();
  };

  Sequencer.fn.parseSequencer = function () {
    var instruments = this.element.find("[data-instrument]")
      , notes = this.element.find("[data-note]")
      , data = {}
      , tracks
    ;

    tracks = instruments.length ? instruments : notes;

    tracks.each(function () {
      var positions = []
        , trackLabel = instruments.length ? "instrument" : "note"
      ;

      $(this).find("[data-switch]").each(function () {
        positions.push(parseInt($(this).data("switch"), 10));
      });

      data[$(this).data(trackLabel)] = positions;
    });

    this.sequencerData = data;
  };

  Sequencer.fn.renderPosition = function (position) {
    for (var key in this.sequencerData) {
      if (this.sequencerData[key][position] === 1) {
        this.playSound(key);
      }
    }

    this.elementHeaders
      .removeClass("current")
      .filter(":eq(" + (position + 1) + ")").addClass("current");
  };

  Sequencer.fn.clearInterface = function () {
    this.elementHeaders.removeClass("current");
  };

});
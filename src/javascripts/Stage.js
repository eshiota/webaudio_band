// Controls the content rendered on the page

Module("WAB.Stage", function (Stage) {

  function capitalize (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  Stage.fn.initialize = function (stage) {
    this.stage = $(stage);

    WAB.Mediator.on("load-buffers-done", this.onLoadBuffers.bind(this));
    WAB.Mediator.on("add-new-instrument", this.renderNewInstrument.bind(this));
    WAB.Mediator.on("instrument-selected", this.renderSelectedInstrument.bind(this));

    this.mixer = Module.run("WAB.StageMixer", [this.stage.data("admin") ? "admin" : "instrument"]);

    FastClick.attach(document.body);
  };

  Stage.fn.renderSection = function (section) {
    var renderer = "render" + section.split("-").map(capitalize).join("");

    if (typeof this[renderer] === "function") {
      this[renderer].call(this);
    }
  };

  // Sections
  // --------

  Stage.fn.renderAdminPage = function () {
    var html = WAB.templates["admin_page"]();

    this.stage.html(html);

    Module.run("WAB.commands.AdminPageCommand", [this.stage]);
  };

  Stage.fn.renderInstrumentPage = function () {
    var html = WAB.templates["instrument_page"]();

    this.stage.html(html);

    Module.run("WAB.commands.InstrumentPageCommand", [this.stage]);
  };

  // Stage modifications
  // -------------------

  Stage.fn.renderNewInstrument = function (instrument) {
    var html;

    // TODO: Improve this
    if (instrument === "drum_sequencer") {
      html = WAB.templates["drum_sequencer"]();
    } else if (instrument === "synth_sequencer") {
      html = WAB.templates["synth_sequencer"]();
    } else if (instrument === "bass_sequencer") {
      html = WAB.templates["bass_sequencer"]();
    } else if (instrument === "remote_drums") {
      html = WAB.templates["remote_drums_host"]();
    }else if (instrument === "remote_keyboard") {
      html = WAB.templates["remote_keyboard_host"]();
    }

    html = $(html).hide();

    this.stage.byData("stage-instruments").append(html);
    this.mixer.plugNewInstrument(instrument, html);

    html.slideDown("fast");
  };

  Stage.fn.renderSelectedInstrument = function (instrument) {
    var html
      , control
    ;

    // TODO: Improve this
    if (instrument.type === "drums") {
      html = WAB.templates["drums"](instrument);
      control = "DrumsControl";
    } else if (instrument.type === "keyboard") {
      html = WAB.templates["keyboard"](instrument);
      control = "KeyboardControl";
    }

    html = $(html).hide();

    this.stage.byData("instrument").append(html);
    Module.run("WAB.controls." + control, [html, instrument.id]);

    html.slideDown("fast");
  };

  // Callbacks
  // -------------------

  Stage.fn.onLoadBuffers = function () {
    if (this.stage.data("admin") === true) {
      this.renderSection("admin-page");
    } else {
      this.renderSection("instrument-page");
    }
  };

});

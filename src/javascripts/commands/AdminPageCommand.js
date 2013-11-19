Module("WAB.commands.AdminPageCommand", function (Command) {

  Command.fn.initialize = function (stage) {
    Module.run("WAB.controls.NewInstrumentsControl", [stage.byData("new-instrument-control")]);
    Module.run("WAB.controls.SequencerControl", [stage.byData("sequencer-control")]);
  };

});
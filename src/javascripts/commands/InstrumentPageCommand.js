Module("WAB.commands.InstrumentPageCommand", function (Command) {

  Command.fn.initialize = function (stage) {
    Module.run("WAB.controls.InstrumentSelector", [stage.byData("instrument-selector")]);
  };

});
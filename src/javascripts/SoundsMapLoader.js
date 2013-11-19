// Should be used for decoration. Expects that decorated object has the
// `soundsMap` property, with a instrument-to-url map.

Module("WAB.SoundsMapLoader", function (SoundsMapLoader) {

  SoundsMapLoader.sounds = {};

  $.extend(SoundsMapLoader, EventEmitter.prototype);

  SoundsMapLoader.loadSound = function (audioContext, key, url) {
    var request = new XMLHttpRequest()
      , dfd = $.Deferred()
    ;

    request.open("get", url);
    request.responseType = "arraybuffer";

    request.onload = (function () {
      audioContext.decodeAudioData(request.response, (function (buffer) {
        this.sounds[key] = buffer;
        dfd.resolve();
      }).bind(this));
    }).bind(this);

    request.send();

    return dfd;
  };

  SoundsMapLoader.loadSounds = function (audioContext) {
    var dfds = []
      , masterDfd = $.Deferred()
    ;

    for (var key in this.soundsMap) {
      dfds.push(this.loadSound(audioContext, key, this.soundsMap[key]));
    }

    $.when.apply($, dfds).then(function () {
      masterDfd.resolve();
    });

    return masterDfd;
  };

}, {});

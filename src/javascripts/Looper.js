// Each beat (1/4 note) has 4 divisions (1/16 notes). A full cycle has
// 32 1/16 notes, which will be called as positions.
//
// Something like this:
//
// - - - - | - - - - | - - - - | - - - - | - - - - | - - - - | - - - - | - - - -
// 0         4         8         12        16        20        24        28   31

Module("WAB.Looper", function (Looper) {

  $.extend(Looper.fn, EventEmitter.prototype);

  // @initialSpeed Speed in bpm format
  Looper.fn.initialize = function (initialSpeed) {
    this.speed = initialSpeed || 125;
    this.position = 0;
    this.lastPosition = 31;
    this.playing = false;

    this.setPositionDuration();
  };

  Looper.fn.setSpeed = function (speed) {
    this.speed = speed;
    this.setPositionDuration();
  };

  Looper.fn.setPositionDuration = function () {
    this.positionDuration = 60000 / (this.speed * 4);
  };

  Looper.fn.start = function (position) {
    if (this.playing) { return; }

    if (position) {
      this.position = position;
    }

    this.playing = true;
    this.triggerPosition();

    this.trigger("loop-start");
  };

  Looper.fn.pause = function () {
    this.playing = false;

    this.trigger("loop-pause");
  };

  Looper.fn.stop = function () {
    this.playing = false;
    this.position = 0;

    this.trigger("loop-stop");
  };

  Looper.fn.triggerPosition = function () {
    if (!this.playing) { return true; }

    this.trigger("position-change", [this.position]);

    this.position = this.position === this.lastPosition ? 0 : this.position + 1;

    setTimeout(this.triggerPosition.bind(this), this.positionDuration);
  };

});
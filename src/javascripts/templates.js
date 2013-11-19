this["WAB"] = this["WAB"] || {};
this["WAB"]["templates"] = this["WAB"]["templates"] || {};

Handlebars.registerPartial("host_controls", this["WAB"]["templates"]["host_controls"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"host-controls\">\n  <div class=\"host-controls-content\">\n    <div class=\"sequencer-control\" data-sequencer-control>\n      <div class=\"host-control\">\n        <h3 class=\"host-controls-title\">Sequencer control</h3>\n\n        <button data-sequencer-play>Play</button>\n        <button data-sequencer-stop>Stop</button>\n      </div>\n\n      <div class=\"tempo-control host-control\">\n        <h3 class=\"host-controls-title\">Current BPM: <span data-current-tempo>125</span></h3>\n\n        <input type=\"number\" data-tempo value=\"125\" />\n        <button data-change-tempo>Change</button>\n      </div>\n    </div>\n\n    <div class=\"new-instrument-control host-control\" data-new-instrument-control>\n      <h3 class=\"host-controls-title\">Add new instrument</h3>\n\n      <select data-select-new-instrument>\n        <option value=\"drum_sequencer\">Drum Sequencer</option>\n        <option value=\"synth_sequencer\">Synth Sequencer</option>\n        <option value=\"bass_sequencer\">Bass Sequencer</option>\n        <option value=\"remote_drums\">Drums (remote)</option>\n        <option value=\"remote_keyboard\">Keyboard (remote)</option>\n      </select>\n\n      <button data-add-new-instrument>Add</button>\n    </div>\n  </div>\n</div>\n";
  }));

Handlebars.registerPartial("sequencer_header", this["WAB"]["templates"]["sequencer_header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<thead>\n  <tr>\n    <th class=\"track-name\">\n    <th class=\"first-beat\">1</th><th>2</th><th>3</th><th>4</th>\n    <th class=\"first-beat\">1</th><th>2</th><th>3</th><th>4</th>\n    <th class=\"first-beat\">1</th><th>2</th><th>3</th><th>4</th>\n    <th class=\"first-beat\">1</th><th>2</th><th>3</th><th>4</th>\n    <th class=\"first-beat\">1</th><th>2</th><th>3</th><th>4</th>\n    <th class=\"first-beat\">1</th><th>2</th><th>3</th><th>4</th>\n    <th class=\"first-beat\">1</th><th>2</th><th>3</th><th>4</th>\n    <th class=\"first-beat\">1</th><th>2</th><th>3</th><th>4</th>\n  </tr>\n</thead>";
  }));

Handlebars.registerPartial("sequencer_switches_row", this["WAB"]["templates"]["sequencer_switches_row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<td class=\"first-beat\"><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td>\n<td class=\"first-beat\"><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td>\n<td class=\"first-beat\"><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td>\n<td class=\"first-beat\"><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td>\n<td class=\"first-beat\"><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td>\n<td class=\"first-beat\"><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td>\n<td class=\"first-beat\"><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td>\n<td class=\"first-beat\"><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td> <td><button data-switch=\"0\">Off</button></td>";
  }));

this["WAB"]["templates"]["admin_page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div id=\"admin-page\">\n  <h1>Web Audio Band - Host</h1>\n\n  ";
  stack1 = self.invokePartial(partials.host_controls, 'host_controls', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"stage-instruments\" data-stage-instruments>\n  </div>\n</div>";
  return buffer;
  });

this["WAB"]["templates"]["bass_sequencer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"bass-sequencer sequencer track\">\n  <div class=\"track-content\">\n    <h3 class=\"track-title\">Bass sequencer</h3>\n\n    <button class=\"close\" data-close-instrument>X</button>\n\n    <table>\n      ";
  stack1 = self.invokePartial(partials.sequencer_header, 'sequencer_header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <tbody>\n        <tr data-note=\"C2\">\n          <td>C2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"C#2\">\n          <td>C#2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"D2\">\n          <td>D2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"D#2\">\n          <td>D#2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"E2\">\n          <td>E2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"F2\">\n          <td>F2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"F#2\">\n          <td>F#2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"G2\">\n          <td>G2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"G#2\">\n          <td>G#2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"A2\">\n          <td>A2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"A#2\">\n          <td>A#2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"B2\">\n          <td>B2</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>";
  return buffer;
  });

this["WAB"]["templates"]["drum_sequencer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"drum-sequencer sequencer track\">\n  <div class=\"track-content\">\n    <h3 class=\"track-title\">Drum sequencer</h3>\n\n    <button class=\"close\" data-close-instrument>X</button>\n\n    <table>\n      ";
  stack1 = self.invokePartial(partials.sequencer_header, 'sequencer_header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <tbody>\n        <tr data-instrument=\"kick\">\n          <td>Kick</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-instrument=\"snare\">\n          <td>Snare</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-instrument=\"tom_hi\">\n          <td>Hi tom</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-instrument=\"tom_low\">\n          <td>Low tom</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-instrument=\"hihat_closed\">\n          <td>Closed hihat</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-instrument=\"hihat_open\">\n          <td>Open hihat</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-instrument=\"trash\">\n          <td>Trash</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>";
  return buffer;
  });

this["WAB"]["templates"]["drums"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"track\">\n  <div class=\"drums track-content\" id=\"";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <h3 class=\"track-title\">Drums</h3>\n\n    <div>\n      <button data-instrument=\"kick\">Kick</button>\n      <button data-instrument=\"snare\">Snare</button>\n      <button data-instrument=\"tom_hi\">Hi Tom</button>\n      <button data-instrument=\"tom_low\">Low Tom</button>\n      <button data-instrument=\"hihat_open\">Hi Hat Open</button>\n      <button data-instrument=\"hihat_closed\">Hi Hat Closed</button>\n      <button data-instrument=\"trash\">Trash</button>\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["WAB"]["templates"]["empty_selector"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p class=\"empty-selector\">Waiting for available instruments...</p>";
  });

this["WAB"]["templates"]["initial_page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"initial-page\">\n  <button class=\"host-button\" data-host>Host</button>\n  <button class=\"instrument-button\" data-instrument>Instrument</button>\n</div>\n";
  });

this["WAB"]["templates"]["instrument_page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"instrument-page\">\n  <div class=\"instrument-selector-track\">\n    <div class=\"instrument-selector\" data-instrument-selector>\n    </div>\n  </div>\n\n  <div class=\"instrument\" data-instrument>\n  </div>\n</div>\n";
  });

this["WAB"]["templates"]["keyboard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"track\">\n  <div class=\"keyboard track-content\" id=\"";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <h3 class=\"track-title\">Keyboard</h3>\n\n    <div id=\"";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["WAB"]["templates"]["remote_drums_host"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"remote-drums-host track\">\n  <div class=\"track-content\">\n    <h3 class=\"track-title\">Remote Drums</h3>\n\n    <button class=\"close\" data-close-instrument>X</button>\n\n    <p data-status>Awaiting connection</p>\n  </div>\n</div>";
  });

this["WAB"]["templates"]["remote_instrument_selector"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <button data-instrument-type=\"";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-instrument-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" disabled>Unavailable</button>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <button data-instrument-type=\"";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-instrument-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Connect</button>\n  ";
  return buffer;
  }

  buffer += "<div class=\"remote-";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-selector remote-instrument-selector\">\n  <h3 class=\"remote-instrument-selector-title\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n\n  ";
  stack1 = helpers['if'].call(depth0, depth0.connected, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["WAB"]["templates"]["remote_keyboard_host"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"remote-keyboard-host track\">\n  <div class=\"track-content\">\n    <h3 class=\"track-title\">Remote Keyboard</h3>\n\n    <button class=\"close\" data-close-instrument>X</button>\n\n    <p data-status>Awaiting connection</p>\n  </div>\n</div>";
  });

this["WAB"]["templates"]["synth_sequencer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"synth-sequencer sequencer track\">\n  <div class=\"track-content\">\n    <h3 class=\"track-title\">Synth sequencer</h3>\n\n    <button class=\"close\" data-close-instrument>X</button>\n\n    <table>\n      ";
  stack1 = self.invokePartial(partials.sequencer_header, 'sequencer_header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <tbody>\n        <tr data-note=\"C3\">\n          <td>C3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"C#3\">\n          <td>C#3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"D3\">\n          <td>D3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"D#3\">\n          <td>D#3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"E3\">\n          <td>E3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"F3\">\n          <td>F3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"F#3\">\n          <td>F#3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"G3\">\n          <td>G3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"G#3\">\n          <td>G#3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"A3\">\n          <td>A3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"A#3\">\n          <td>A#3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n\n        <tr data-note=\"B3\">\n          <td>B3</td>\n          ";
  stack1 = self.invokePartial(partials.sequencer_switches_row, 'sequencer_switches_row', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>";
  return buffer;
  });
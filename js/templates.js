Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"pane global\" id=\"editor\">\n  <header>\n    <span class=\"title\">Editor</span>\n    <nav>\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "nav", options) : helperMissing.call(depth0, "outlet", "nav", options))));
  data.buffer.push("\n    </nav>\n  </header>\n  <section class=\"main\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </section>\n</section>\n\n<section class=\"pane global\" id=\"viewer\">\n  <header>\n    <span class=\"title\">Viewer</span>\n    <a href=\"http://emberjs.com\" class=\"ember-link\">\n      <img src=\"img/tomster.png\" alt=\"Ember.js\">\n    </a>\n  </header>\n  <section class=\"main\">\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render),stack1 ? stack1.call(depth0, "viewer", options) : helperMissing.call(depth0, "render", "viewer", options))));
  data.buffer.push("\n  </section>\n</section>\n\n<footer>\n  <a href=\"http://github.com/jgwhite/ember-sandbox\">View the source on GitHub &rarr;</a>\n</footer>\n");
  return buffer;
  
});

Ember.TEMPLATES["gist"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["gist/css"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'valueBinding': depth0,'mode': depth0};
  hashTypes = {'valueBinding': "STRING",'mode': "STRING"};
  options = {hash:{
    'valueBinding': ("css"),
    'mode': ("css")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.ace),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ace", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["gist/hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'valueBinding': depth0,'mode': depth0};
  hashTypes = {'valueBinding': "STRING",'mode': "STRING"};
  options = {hash:{
    'valueBinding': ("hbs"),
    'mode': ("html")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.ace),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ace", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["gist/js"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'valueBinding': depth0,'mode': depth0};
  hashTypes = {'valueBinding': "STRING",'mode': "STRING"};
  options = {hash:{
    'valueBinding': ("js"),
    'mode': ("javascript")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.ace),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ace", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["gist/nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("JS");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("HBS");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("CSS");
  }

  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "gist.js", options) : helperMissing.call(depth0, "linkTo", "gist.js", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "gist.hbs", options) : helperMissing.call(depth0, "linkTo", "gist.hbs", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "gist.css", options) : helperMissing.call(depth0, "linkTo", "gist.css", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("Loading…\n");
  
});

Ember.TEMPLATES["local"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["local/css"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'valueBinding': depth0,'mode': depth0};
  hashTypes = {'valueBinding': "STRING",'mode': "STRING"};
  options = {hash:{
    'valueBinding': ("css"),
    'mode': ("css")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.ace),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ace", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["local/hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'valueBinding': depth0,'mode': depth0};
  hashTypes = {'valueBinding': "STRING",'mode': "STRING"};
  options = {hash:{
    'valueBinding': ("hbs"),
    'mode': ("html")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.ace),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ace", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["local/js"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'valueBinding': depth0,'mode': depth0};
  hashTypes = {'valueBinding': "STRING",'mode': "STRING"};
  options = {hash:{
    'valueBinding': ("js"),
    'mode': ("javascript")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.ace),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ace", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["local/nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("JS");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("HBS");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("CSS");
  }

  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "local.js", options) : helperMissing.call(depth0, "linkTo", "local.js", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "local.hbs", options) : helperMissing.call(depth0, "linkTo", "local.hbs", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "local.css", options) : helperMissing.call(depth0, "linkTo", "local.css", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["viewer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashContexts = {'jsBinding': depth0,'hbsBinding': depth0,'cssBinding': depth0};
  hashTypes = {'jsBinding': "STRING",'hbsBinding': "STRING",'cssBinding': "STRING"};
  options = {hash:{
    'jsBinding': ("js"),
    'hbsBinding': ("hbs"),
    'cssBinding': ("css")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.frame),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "frame", options))));
  data.buffer.push("\n");
  return buffer;
  
});
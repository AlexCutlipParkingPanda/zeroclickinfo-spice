(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['hacker_news'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {

  var buffer = "", stack1, stack2, options;
  buffer += "\n	<div>\n		<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  options = {hash:{
    'max_len': ("40")
  },data:data};
  stack2 = ((stack1 = helpers.condense),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "condense", depth0.title, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n		<span>[";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.comment_link),stack1 ? stack1.call(depth0, depth0.num_comments, options) : helperMissing.call(depth0, "comment_link", depth0.num_comments, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "]</span>\n		<span>(";
  if (stack2 = helpers.domain) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.domain; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + ", ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.hn_points),stack1 ? stack1.call(depth0, depth0.points, options) : helperMissing.call(depth0, "hn_points", depth0.points, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ")</span>\n	</div>\n";
  return buffer;
  }

function program3(depth0,data) {

  var buffer = "", stack1, stack2, options;
  buffer += "\n	<div>\n	<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  options = {hash:{
    'max_len': ("200")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.condense),stack1 ? stack1.call(depth0, depth0.text, options) : helperMissing.call(depth0, "condense", depth0.text, options)))
    + "</a>\n		<span>[by ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.user_link),stack1 ? stack1.call(depth0, depth0.username, options) : helperMissing.call(depth0, "user_link", depth0.username, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "]</span>\n		<span>[";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.item_link),stack1 ? stack1.call(depth0, "parent", depth0, options) : helperMissing.call(depth0, "item_link", "parent", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "]</span>\n		";
  stack2 = helpers['if'].call(depth0, depth0.discussion, {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n	";
  return buffer;
  }
function program4(depth0,data) {

  var buffer = "", stack1, stack2, options;
  buffer += "\n		<span>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.item_link),stack1 ? stack1.call(depth0, ((stack1 = depth0.discussion),stack1 == null || stack1 === false ? stack1 : stack1.title), depth0, options) : helperMissing.call(depth0, "item_link", ((stack1 = depth0.discussion),stack1 == null || stack1 === false ? stack1 : stack1.title), depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\n		";
  return buffer;
  }

function program6(depth0,data) {

  var buffer = "", stack1, stack2, options;
  buffer += "\n		<span>";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.item_link),stack1 ? stack1.call(depth0, depth0.title, depth0, options) : helperMissing.call(depth0, "item_link", depth0.title, depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\n		";
  return buffer;
  }

function program8(depth0,data) {

  var buffer = "", stack1, stack2, options;
  buffer += "\n	<div>\n		<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.condense),stack1 ? stack1.call(depth0, depth0.title, options) : helperMissing.call(depth0, "condense", depth0.title, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n		<span>[";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.comment_link),stack1 ? stack1.call(depth0, depth0.num_comments, options) : helperMissing.call(depth0, "comment_link", depth0.num_comments, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "]</span>\n		<span>(";
  if (stack2 = helpers.domain) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.domain; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + ", ";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.hn_points),stack1 ? stack1.call(depth0, depth0.points, options) : helperMissing.call(depth0, "hn_points", depth0.points, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ")</span>\n	</div>\n	";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, depth0.topResults, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<hr>\n\n<p class=\"showHide\">Top Comments</p>\n<div class=\"hide\">\n	\n	";
  stack1 = helpers.each.call(depth0, depth0.topComments, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<hr>\n\n<p class=\"showHide\">Other Stories</p>\n<div class=\"hide\">\n	";
  stack1 = helpers.each.call(depth0, depth0.topSubmissions, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });
})();
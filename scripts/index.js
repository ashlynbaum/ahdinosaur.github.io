var $ = jQuery = require('jquery');
require('./vendor/jquery.easing');

require('semantic/src/modules/popup');

$(function () {
  $('body > main > nav > ul.menu > li.item i.icon').popup({
    variation: "inverted",
  });
  require('./deobfuscate')();
});

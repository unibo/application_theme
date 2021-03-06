// import jQuery
import $ from 'jquery';
import 'foundation-sites';
import 'what-input';
import hljs from 'highlight.js';

window.hljs = hljs;

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used import to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// // the line below
// import './lib/foundation-explicit-pieces';


import './font-awesome';
import './u_to_top';
import './toc';


$(document).foundation();
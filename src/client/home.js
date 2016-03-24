import $ from 'jquery';
import '../vendors/semantic.min.js';

window.refreshStickyForLibs = function() {
  $('#liblist_details').sticky('refresh');
};

$(document).ready(function() {
  $('#liblist_details').sticky({context: '#liblist_container'});
});

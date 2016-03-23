import $ from 'jquery';
import '../vendors/semantic.min.js';

$(document).ready(function() {
  $('.ui.sticky').sticky({context: '#liblist_container'});
});

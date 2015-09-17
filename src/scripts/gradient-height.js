import $ from 'jquery';

function gradientHeight(){
  $('.hero-gradient').css('height',$('.hero').outerHeight());
}
export default gradientHeight;

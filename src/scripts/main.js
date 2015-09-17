import $ from 'jquery';
import loadProjects from './load-projects';
import mobileMenu from './mobile-menu';
import slideshow from './slideshow';
import gradientHeight from './gradient-height';

loadProjects();

$(window).resize(function(){
  gradientHeight();
});

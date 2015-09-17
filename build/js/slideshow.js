import $ from 'jquery';
import constants from './constants';
import gradientHeight from './gradient-height';

const GRADIENT_SELECTOR     = $('.hero-gradient');
const GRADIENT_DIV_SELECTOR = GRADIENT_SELECTOR.find('div');
const IMAGE_SELECTOR        = $('.hero-img > img');

class Slideshow{
  constructor() {
    //Ensure gradient spans the height of the hero section
    gradientHeight();

    this.slideIndex = 0;
    this.owlSlideshow();
  }

  owlSlideshow(){
    setTimeout(()=> {
      if (this.slideIndex < 2){
        this.slideIndex++;
      } else {
        this.slideIndex = 0;
      }
      IMAGE_SELECTOR.eq(this.slideIndex-1).removeClass(constants.activeModifier);
      IMAGE_SELECTOR.eq(this.slideIndex).addClass(constants.activeModifier);
      GRADIENT_DIV_SELECTOR.eq(this.slideIndex-1).removeClass(constants.activeModifier);
      GRADIENT_DIV_SELECTOR.eq(this.slideIndex).addClass(constants.activeModifier);
      this.owlSlideshow();
    }, 3000);
  }
}

export default new Slideshow();

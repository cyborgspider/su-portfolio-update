import $ from 'jquery';
import magnificPopup from 'magnific-popup';

export default function(){
//Create an empty array where all our strings will be contained
let content = [];

//Go through each INFO block on the page and create an HTML string and put into the content array
$('.info').each(function(i){
  let $this            = $(this),
      projectLink        = this.hash.substr(1),
      projectTitle       = $this.find('h2').text(),
      projectDescription = $this.find('p'),
      numberOfImages     = $this.attr('data-number'),
      imageFilename      = $this.attr('data-filename'),
      linkBehance        = $this.attr('data-behance') || '',
      linkLive           = $this.attr('data-live') || '',
      linkWireframe      = $this.attr('data-wireframe') || '',
      anchorBehance      = '',
      anchorLive         = '',
      anchorWireframe    = '',
      imgArray           = [];

  if (linkBehance){
    anchorBehance = `<a href="${linkBehance}" target="_blank">Larger view from Behance</a>`;
  }
  if (linkLive) {
    anchorLive = `<a href="${linkLive}" target="_blank">Check out live site</a>`;
  }
  if (linkWireframe) {
    anchorWireframe = `<a href="${linkWireframe}" target="_blank">See Wireframe/Prototype</a>`;
  }

  for (let i =0; i <= numberOfImages; i++){
    imgArray.push(`<img src='img/${projectLink}/slide-${i}.jpg' alt='' />`);
  }

  let productTemplate =  function(){
    return `<div class="modal-content mfp-hide" id="${projectLink}">
            <h2>${projectTitle}</h2>
            <p>${projectDescription.text()}</p>
            <p>${anchorBehance} ${anchorLive} ${anchorWireframe}</p>
            ${imgArray}</div>`
  };

  //Adding to the global content array
  content.push(productTemplate())
});
//Here's the code that adds the content to our page.
$(content.join('')).appendTo('body');

if (content){
  $('.info').magnificPopup({
    type:'inline'
  });
} else {
  console.log('Please wait while our content is generated.')
}

console.log(magnificPopup);

}

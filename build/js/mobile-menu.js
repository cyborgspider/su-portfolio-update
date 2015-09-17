function mobileMenu(){

  $('.icon-menu').click(()=>{
    let $this = $(this),
        $menu = $this.closest('.mobile-nav');
    $menu.addClass('-active');
  });

  $('.icon-close').click(()=>{
    let $this = $(this),
        $menu = $this.closest('.mobile-nav');
    $menu.removeClass('-active');
  });

  $('.mobile-links').on('click', 'a', ()=>{
    $('.mobile-nav').removeClass('-active');
    let href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
  });
}

export default mobileMenu;

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "UI/UX Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.header-item-link');
const tabActive = $('.header-item-link.header-item--active');
const line = $(".line");
line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'
tabs.forEach((tab, index) => {
  tab.onclick = function() {
    $('.header-item-link.header-item--active').classList.remove('header-item--active')
    this.classList.add('header-item--active')
    line.style.left = this.offsetLeft + 'px'
    line.style.width = this.offsetWidth + 'px'
  }
});


const title = $('.header-title');
const result = $('.return');
title.onclick = function() {
  $('.header-item-link.header-item--active').classList.remove('header-item--active')
  result.classList.add('header-item--active')
  line.style.left = result.offsetLeft + 'px'
  line.style.width = result.offsetWidth + 'px'
}
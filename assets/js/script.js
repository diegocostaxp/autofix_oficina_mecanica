'use strict';

const navbar = document.querySelector('[data-navbar]');
const navToggle = document.querySelector('[data-nav-toggle]');

function navToggleBar() {
  navbar.classList.toggle('active');
  this.classList.toggle('active');
}

navToggle.addEventListener('click', navToggleBar);


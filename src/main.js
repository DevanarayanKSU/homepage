import './style.css';
//import javascriptLogo from './assets/javascript.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
//import { setupCounter } from './counter.js'
import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');
const swiperlabel = document.getElementById('swiperlabel');
const swiperlabel2 = document.getElementById('swiperlabel2');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: 'Name Required',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Name should be at least 3 characters long',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Name sould be under 15 characters long',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: 'email Required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: 'Password Required',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: 'Age Required',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: 'Address Required',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 100,
    },
  ])
  .onSuccess((event) => {
    //console.log('submitted');
    const formdata = new FormData(event.currentTarget);
    for (let [key, value] of formdata) {
      console.log('key : ' + key + '-- value: ' + value);
    }
  });

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiper1.on('slideChange', function () {
  swiperlabel.textContent = 'Slide' + (swiper1.realIndex + 1);
});
swiper2.on('slideChange', function () {
  swiperlabel2.textContent = 'Slide' + (swiper2.realIndex + 1);
});

// document.querySelector('#app').innerHTML = `
// <section id="center">
//   <div class="hero">
//     <img src="${heroImg}" class="base" width="170" height="179">
//     <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
//     <img src="${viteLogo}" class="vite" alt="Vite logo" />
//   </div>
//   <div>
//     <h1>Get started</h1>
//     <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
//   </div>
//   <button id="counter" type="button" class="counter"></button>
// </section>

// <div class="ticks"></div>

// <section id="next-steps">
//   <div id="docs">
//     <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
//     <h2>Documentation</h2>
//     <p>Your questions, answered</p>
//     <ul>
//       <li>
//         <a href="https://vite.dev/" target="_blank">
//           <img class="logo" src="${viteLogo}" alt="" />
//           Explore Vite
//         </a>
//       </li>
//       <li>
//         <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//           <img class="button-icon" src="${javascriptLogo}" alt="">
//           Learn more
//         </a>
//       </li>
//     </ul>
//   </div>
//   <div id="social">
//     <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
//     <h2>Connect with us</h2>
//     <p>Join the Vite community</p>
//     <ul>
//       <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
//       <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
//       <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
//       <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
//     </ul>
//   </div>
// </section>

// <div class="ticks"></div>
// <section id="spacer"></section>
// `

// setupCounter(document.querySelector('#counter'))

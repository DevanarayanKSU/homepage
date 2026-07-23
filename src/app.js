import './styles.css';
import { animate } from 'animejs';

const eases = [
  'bezier in',
  'bezier out',
  'bezier inOut',
  'bezier outIn',
  'inExpo',
  'outExpo',
  'inOutExpo',
  'outInExpo',
  'spring bouncy',
  'spring default',
  'spring snappy',
  'spring strong',
  'inElastic',
  'outElastic',
  'inOutElastic',
  'outInElastic',
  'outBounce',
  'stepsStart',
  'inBack',
  'outBack',
  'inOutBack',
  'outInBack',
];

document.querySelectorAll('.square').forEach((square) => {
  animate(square, {
    x: Number(square.dataset.x),
    duration: 1500,
    delay: 1000,
    ease: eases[Math.floor(Math.random() * eases.length)],
  });
});

document.querySelectorAll('.wrap').forEach((wrap) => {
  animate(wrap, {
    y: Number(wrap.dataset.y),
    duration: 500,
    ease: 'outExpo',
  });
});

document.querySelectorAll('.letter').forEach((letter) => {
  animate(letter, {
    x: Number(letter.dataset.x),
    duration: 500,
    delay: 500,
    ease: eases[Math.floor(Math.random() * eases.length)],
  });
});

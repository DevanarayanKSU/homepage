import './styles.css';
import { animate, steps, cubicBezier } from 'animejs';

const eases = [
  cubicBezier(0.5, 0, 0.9, 0.3),
  cubicBezier(0.1, 0.7, 0.5, 1),
  cubicBezier(0.7, 0.1, 0.5, 0.9),
  cubicBezier(0.1, 0.7, 0.9, 0.5),
  'inExpo',
  'outExpo',
  'inOutExpo',
  'outInExpo',
  'spring bouncy',
  'spring default',
  'spring snappy',
  'spring strong',
  'inElastic(1, 0.3)',
  'outElastic(1, 0.3)',
  'inOutElastic(1, 0.3)',
  'outInElastic(1, 0.3)',
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
    scale: [1, Math.floor(Math.random() * 10) / 10, 1],
    opacity: [1, Math.floor(Math.random() * 10) / 10, 1],
    duration: 1500,
    delay: 1200 + Math.floor(Math.random() * 3000),
    ease: eases[Math.floor(Math.random() * eases.length)],
  });
});

document.querySelectorAll('.wrap').forEach((wrap) => {
  animate(wrap, {
    y: Number(wrap.dataset.y),
    duration: 500,
    ease: steps(5, true),
  });
});

document.querySelectorAll('.letter').forEach((letter) => {
  animate(letter, {
    x: Number(letter.dataset.x),
    duration: 500,
    delay: 500 + Math.floor(Math.random() * 500),
    ease: eases[Math.floor(Math.random() * eases.length)],
  });
});

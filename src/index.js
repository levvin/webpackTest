import myimg from './assert/img/th2.jpg';
import './assert/css/index.scss';

let root = document.getElementById('root');

let img = new Image();
img.src = myimg;
img.classList.add('myimg');
root.appendChild(img);
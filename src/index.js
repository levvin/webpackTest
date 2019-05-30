import myimg from './assert/img/th2.jpg';
import cssModule from './components/cssmodule.js'

import './index.css';
//css模块化引入
import style from './assert/css/index.scss';


cssModule();


let img = new Image();
img.src = myimg;
//css 模块化打包
img.classList.add(style['myimg']);

let root = document.getElementById('root');
root.appendChild(img);
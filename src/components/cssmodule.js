import myimg from '../assert/img/th2.jpg';

export default function Cssmodule(){

	let img = new Image();
	img.src = myimg;
	img.classList.add('woimg');

	var root = document.getElementById("root");
	root.appendChild(img);
}
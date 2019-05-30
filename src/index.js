
import './assert/css/index.scss';

import counter from './assert/js/counter';
import number from './assert/js/number'

let btn = document.createElement('button');

btn.innerHTML = '新增';

document.body.appendChild(btn);

btn.onclick = function() {
	let dom = document.createElement('div');
	dom.innerHTML = 'item';
	document.body.appendChild(dom)
}

counter();
number();

if(module.hot) {
	module.hot.accept('./assert/js/number.js', ()=>{
		document.body.removeChild(document.getElementById('number'));
		number();
	})
}
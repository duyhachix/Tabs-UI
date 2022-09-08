let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let tabs = $$('.tab__item');
let panes = $$('.body__item');
// console.log(tabs, panes);

let tabActive = $('.tab__item.active');
const line = $('.tab .line');
console.log([line]);
console.log([tabActive]);
// tabActive.style.tabs

// lay ra tung 'tab',pane khi query cac the tab__item
tabs.forEach((tab, index) => {
	const pane = panes[index];
	tab.onclick = function () {
		// console.log(pane);
		// console.log(this);
		$('.tab__item.active').classList.remove('active');
		$('.body__item.active').classList.remove('active');

		line.style.left = this.offsetLeft + 'px';
		line.style.width = this.offsetWidth + 'px';

		this.classList.add('active');
		pane.classList.add('active');
	};
});

//

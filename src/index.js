'use strict';

if (document.readyState === 'interactive' || document.readystate === 'completed') {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}

function init () {
	const view = require('./View');

	const mainView = view(document.getElementById('app'), renderMain({ message: 'It rendered!!!!!' }));

	setTimeout(function () {
		mainView.render(renderMain({ message: 'Changed!!!!', class: 'new_class' }));
	}, 2000)

	function renderMain (options) {
		return `
			<div class="${options.class || ''}">
				<h1>App</h1>
				<p>${options.message || 'no message provided'}</p>
			</div>
		`.trim();
	}

	window.renderMain = renderMain;
}


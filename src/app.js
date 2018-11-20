/* eslint-disable global-require */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Get bulma css
import 'bulma/bulma.sass';

// Get our components
import TodoApp from './components/TodoApp';

// Render our application
document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<TodoApp />, document.querySelector('#app'));

	// Let's Hot Module Replace the main TodoApp component
	// module.hot is provided by WebPack
	if (module.hot) {
		module.hot.accept('./components/TodoApp', () => {
			const NewTodoApp = require('./components/TodoApp').default;
			ReactDOM.render(<NewTodoApp />, document.querySelector('#app'));
		});
	}
});

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Get bulma css
import 'bulma/bulma.sass';

// Get our components
import TodoApp from './components/TodoApp';

// Render our application
document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<TodoApp />, document.querySelector('#app'));
});

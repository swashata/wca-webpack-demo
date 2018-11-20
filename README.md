# Simple Demo for App development with webpack

This is just a demo to show you how we can use webpack, along with webpack-dev-server
to have an awesome DX while developing a front-end application.

## Install

Make sure you have [nodejs](https://nodejs.org/en/) (>= 8.12) and [git](https://git-scm.com/)
installed.

Clone this repository. Then run

```bash
npm i
```

## Start development server

From your terminal, run

```bash
npm start
```

This will open a development server on your localhost and will show the URL.

If your port is free, the default URL would be [http://localhost:8080/](http://localhost:8080/).

## Production Build

To create production version of assets, run

```bash
npm run build
```

## Checking HMR

To check how Hot Module Replacement works, start the development server
and make changes to `src/components/TodoApp/*` files. Your changes will be
shown live on the browser.

Under the hood this demo uses a simple re-render of the react app
component to facilitate HMR.

```js
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
```

HMR for CSS is driven by webpack's own css-loader.

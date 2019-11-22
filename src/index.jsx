import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './navbar';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function test() {
	await sleep(3000);
	console.log('hello after 3 seconds');
}

function App() {
	return (
		<div>
			<Navbar />
			<p>hello wold</p>
			<button type='button' onClick={test}>click me</button>
		</div>
	);
}

ReactDOM.render(
	<App />
	, document.getElementById('app')
);

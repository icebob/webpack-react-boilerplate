import React from 'react';
import ReactDOM from 'react-dom';
import HelloComponent from "./hello.jsx";
import EditComponent from "./edit.jsx";

const container = document.createElement('div');
document.body.appendChild(container);

export default class App extends React.Component {

	render() {
		return( 
			<div>
				<HelloComponent />
				<EditComponent />
			</div>);
	}

}

ReactDOM.render(<App />, container);
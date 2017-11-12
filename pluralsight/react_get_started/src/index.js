import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
// import Button from './Button'
import registerServiceWorker from './registerServiceWorker';

// class Button extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = { counter: 0 };

// 		this.handleClick = () => {
// 			this.setState((prevState) => {
// 				counter: prevState.counter + 1
// 			});
// 		};
// 	}
	
	

// 	render(){
// 		return <button onClick={this.handleClick}>
// 			{this.state.counter}
// 			</button>
// 	}
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

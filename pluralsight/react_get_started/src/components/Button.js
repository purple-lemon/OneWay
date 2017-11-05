import React, { Component } from 'react';

export class Button extends React.Component {
	constructor(props){
		super(props);
		this.state = { counter: 0 };
	}
	render(){
	return <button>{this.state.counter}</button>
	}
}
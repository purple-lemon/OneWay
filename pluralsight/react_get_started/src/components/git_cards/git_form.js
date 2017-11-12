import React, { Component } from 'react';
var axios = require('axios');

export const Card = (props)=>{
	return (
		<div>
			<img src={props.avatar_url} />
			<div>
				<div>{props.name}</div>
				<div>{props.company}</div>
			</div>
		</div>
	);
};

export const CardList = (props) => {
	return (
		<div>
			{props.cards.map(card=><Card key={card.id} {...card} />)}
		</div>
	)
}

export class GitForm extends React.Component{
	state = {
		userName: ""
	}
	handleSubmit = (event) => {
		event.preventDefault();
		var k = this.nameInput.value;
		axios.get('https://api.github.com/users/' + this.state.userName).then(
			resp=>{
				this.props.onSubmit(resp.data);
				this.setState({userName: ''})
				console.log(resp);
			});
	};
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="username" required 
				ref={(input) => {this.nameInput = input}} 
				value={ this.state.userName } 
				onChange={(event) => this.setState({
					userName: event.target.value 
				})}
				/>
				<button type="submit">Add card</button>
			</form>
		)
	}
}

export class GitCardsApp extends React.Component {
	state = {
		cards:[{
			name: "Paul",
			avatar_url: "http://placehold.it/75",
			company: "Facebook"
		}]
	};

	addNewCard = (cardInfo) => {
		this.setState(prevState=>({
			cards: prevState.cards.concat(cardInfo)
		}))
	}
	render(){
		return (
			<div>
				<GitForm onSubmit={this.addNewCard} />
				<CardList cards={this.state.cards} />
			</div>
		);
	}
}
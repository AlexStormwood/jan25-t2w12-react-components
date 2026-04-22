import React from "react";


export default class ButtonCounter extends React.Component {

	// Don't do this for component data, 
	// class instance variables do not scale or optimise nicely
	// with the rest of React's systems
	// counterValue = 0;

	constructor(){
		// super() must run first in the constructor,
		// this enables React.Component and all of its crazy internals
		// to be ready for us to use 
		super();

		this.state = {
			counter: 0
		}

		// This enables the "this" keyword to work inside the function
		this.counterGoUp = this.counterGoUp.bind(this);
	}

	counterGoUp () {
		// this is bad, but just in here so we can quickly use the function
		// this.state.counter = this.state.counter + 1;
		this.setState({counter: this.state.counter + 1})
		console.log("counter go up!!!")
	}


	componentDidMount(){
		// This function runs once automatically when React first loads this component
		console.log("Button Counter has rendered for the first time!")
	}

	componentWillUnmount(){
		// The component is about to be deleted from the page
		console.log("The button counter is being removed from the page");

		alert("Are you sure you want to go?");

		// Example function we could call in componentWillUnMount
		// e.g. if the game is changing levels or menus, we want to autosave
		// autosave()
	}

	componentDidUpdate(){
		console.log("Button Counter value is " + this.state.counter);
	}



	render(){
		// Render the button!!!!
		return(
			<div className="buttoncounter-container">
				<button onClick={this.counterGoUp}>
					Count is {this.state.counter}
				</button>
			</div>
		)
	}

}
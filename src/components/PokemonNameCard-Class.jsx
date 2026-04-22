import React from "react";

export default class PokemonNameCard extends React.Component {

	render(){
		console.log("Class component rendered!");
		return (
			<h2>
				{/* Hello from class component! */}
				{this.props.pokemonName}
			</h2>
		);
	}
}

// This is basically how React will decide how to render the class components:
// listOfAllComponents.forEach(classComponent => classComponent.render());
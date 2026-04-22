import React from "react";


export default class RandomPokemonCard extends React.Component {

	constructor(){
		super();

		this.state = {
			pokemonName: "",
			pokemonSprite: ""
		}
	}

	async componentDidMount(){
		// Generate a random Pokemon number (1-1025)
		let randomPokemonNumber = Math.floor(Math.random() * 1025) + 1;

		// Use the number in a fetch request to the PokeAPI
		let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonNumber);
		let jsonData = await response.json();

		// Save the name and one of the sprite URLs from the response
		// into our component state  
		this.setState({
			pokemonName: jsonData.name,
			pokemonSprite: jsonData.sprites.front_default
		});

	}



	render(){
		return(<div className="randomPokemonCard">
			<h1>{this.state.pokemonName}</h1>
			<img src={this.state.pokemonSprite} alt={"Sprite for Pokemon named " + this.state.pokemonName} />
		</div>)
	}
}
import PokemonNameCard from "./PokemonNameCard-Class";


let pokemonNames = [
	"Pikachu",
	"Mewtwo",
	"Charizard",
	"Briochien"
];

export default function FavouritePokemonList(){
	
	return (
		<div>
			<h1>Favourite Pokemon List</h1>
			{/* array.forEach is for iterating over an array */}
			{/* array.map is for creating a new array based on iterating over another array */}
			{/* so we make an array of h2 elements based on pokemonNames! */}
			{pokemonNames.map((name, index) => {
				// return <h2 key={`${name}-${index}`} >{name}</h2>
				return <PokemonNameCard pokemonName={name} key={`${name}-${index}`} />
			})}
		</div>
	)
}
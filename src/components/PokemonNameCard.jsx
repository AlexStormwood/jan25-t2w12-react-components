

// pokemonName is a prop
// It is passed to PokemonNameCard when it's being rendered
// So we just assume that it has value within this file!
export default function PokemonNameCard({pokemonName}){

	return(
		<h2>
			{pokemonName}
		</h2>
	)
}


// pokemonName is a prop
// It is passed to PokemonNameCard when it's being rendered
// So we just assume that it has value within this file!
export default function PokemonNameCard({pokemonName}){

	// conditional rendering via if conditions
	if (pokemonName.toString().toLocaleLowerCase() == "briochien"){
		return null;
	} else {
		return(
			<h2>
				{pokemonName}
			</h2>
		)
	}

	// short-circuit and/or ternary logic to conditionally render when
	// already inside the return 
	// return (
	// 	<>
	// 		{pokemonName.toString().toLocaleLowerCase() != "briochien" ? 
	// 		<h2>
	// 			{pokemonName}
	// 		</h2> 
	// 		: 
	// 		null
	// 		}
	// 	</>
	// )
}
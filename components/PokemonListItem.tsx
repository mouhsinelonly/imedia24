export const PokemonListItem = ({ pokemon }: { pokemon: IPokemon }) => <div className='bg-white p-4 rounded' key={pokemon.name}>
    {pokemon.name}
</div>
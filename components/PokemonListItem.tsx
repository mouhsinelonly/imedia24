export const PokemonListItem = ({ pokemon }: { pokemon: IPokemon }) => <div className='bg-white p-4 flex-1 w-full' key={pokemon.name}>
    {pokemon.name}
</div>
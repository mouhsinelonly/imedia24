export const PokemonModal = ({ pokemon }: { pokemon: IPokemon }) => <div className='fixed top-0 right-0 bg-black bg-opacity-70 overscroll-contain'>
    <div>
        {pokemon.name}
    </div>
</div>
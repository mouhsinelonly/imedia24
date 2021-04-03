type PropsType = {
    pokemon: IPokemon,
    onClick: (url: string) => void
}

export const PokemonListItem = ({ pokemon, onClick }: PropsType) => {

    const _handleClick = () => {
        onClick(pokemon.url)
    }

    return <div
        data-testid='pokemon-row'
        key={pokemon.name}
        onClick={_handleClick}
        className='bg-white p-4 rounded hover:bg-yellow-300 
    cursor-pointer transition-colors
    hover:text-yellow-800'>
        {pokemon.name}
    </div>
}
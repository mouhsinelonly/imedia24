type PropsType = {
    pokemon: IPokemon,
    onClick: (url: string) => void
}

export const PokemonListItem = ({ pokemon, onClick }: PropsType) => {
    const _handleClick = () => {
        onClick(pokemon.url)
    }
    return <div onClick={_handleClick} className='bg-white p-4 rounded' key={pokemon.name}>
        {pokemon.name}
    </div>
}
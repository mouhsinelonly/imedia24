declare type IPokemon = {
    name: string
    url: string
}

type IPokemonsData = {
    items: IPokemon[]
    nextPage: number
}

type IPokemonsJSONResponse = {
    results: IPokemon[]
}
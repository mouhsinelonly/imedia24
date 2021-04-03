declare type IPokemon = {
    name: string
    url: string
}

type IPokemonsData = {
    items: IPokemon[]
    pageParam: number
}

type IPokemonsJSONResponse = {
    results: IPokemon[]
}
import { useEscDown } from '@hooks/useEscDown'
import { useCallback } from 'react'
import { usePokemon } from '@hooks/usePokemon'
import { Loading } from '@components/Loading'

export const PokemonModal = ({ url, onExit }: { url: string, onExit: () => void }) => {
    const { pokemon, status } = usePokemon(url)
    useEscDown(onExit)

    const _handleBackDropClick = useCallback(() => onExit(), [])

    return <div
        onClick={_handleBackDropClick}
        className='flex justify-center items-center bottom-0 
        w-full fixed top-0 right-0 bg-black bg-opacity-70 overscroll-contain'>
        <div
            onClick={(event) => event.stopPropagation()}
            className='bg-white m-4 p-4 rounded w-full sm:w-1/2 relative pt-16 pb-8'>
            <button
                type='button'
                onClick={onExit}
                aria-label='close modal'
                className='absolute right-0 px-4 top-0 mt-2 mr-2
                hover:bg-red-500 hover:text-white
                 rounded-full py-2 bg-white text-black'>Close</button>
            {status === 'loading' && <div className='flex items-center justify-center'><Loading /></div>}
            {pokemon && <div>
                <h1 className='text-3xl font-bold capitalize pb-4'>{pokemon.name}</h1>
                <div className='flex gap-4'>
                    <img className='w-32 h-32 bg-gray-100 rounded-full' src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <img className='w-32 h-32 bg-gray-100 rounded-full' src={pokemon.sprites.back_default} alt={pokemon.name} />
                </div>
                <ul className='mt-4'>
                    <li className='text-xl py-1'>Order: <span className="text-gray-600">{pokemon.order}</span></li>
                    <li className='text-xl py-1'>Weight: <span className="text-gray-600">{pokemon.weight}</span></li>
                    <li className='text-xl py-1'>Height: <span className="text-gray-600">{pokemon.height}</span></li>
                </ul>
            </div>}
        </div>
    </div>
}
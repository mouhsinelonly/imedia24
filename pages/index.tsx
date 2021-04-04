import { useState } from 'react'
import { usePokemonsList } from '@hooks/usePokemonsList'
import { PokemonListItem } from '../components/PokemonListItem';
import { Loading } from '@components/Loading';
import { PokemonModal } from '@components/PokemonModal';
import InfiniteScroll from 'react-infinite-scroller';
import Head from 'next/head'

export default function Home() {
  const [chosenPokemonUrl, setChosenPokemonUrl] = useState<string | null>(null)
  const { pages, hasNextPage, fetchNextPage } = usePokemonsList()

  const _handlePokemonClick = (url: string) => {
    setChosenPokemonUrl(url)
  }

  const _handleModalExit = () => {
    setChosenPokemonUrl(null)
  }
  return (
    <div className='min-h-screen pb-48 bg-gray-100 p-4'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfiniteScroll
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div key={0} className='bg-white p-4 rounded mt-4 flex justify-center'><Loading /></div>}>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full'>
          {pages.map((page) => page.items.map((pokemon, index) => <PokemonListItem
            onClick={_handlePokemonClick}
            key={index}
            pokemon={pokemon} />))}
        </div>
      </InfiniteScroll>
      {chosenPokemonUrl && <PokemonModal onExit={_handleModalExit} url={chosenPokemonUrl} />}
    </div>
  )
}

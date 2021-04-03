import Head from 'next/head'
import { useState } from 'react'
import { usePokemonsList } from '@hooks/usePokemonsList'
import InfiniteScroll from 'react-infinite-scroller';
import { PokemonListItem } from '../components/PokemonListItem';
import { Loading } from '../components/Loading';
import { PokemonModal } from '../components/PokemonModal';

export default function Home() {
  const [chosenPokemonUrl, setChosenPokemonUrl] = useState<string | null>(null)
  const { pages, hasNextPage, fetchNextPage } = usePokemonsList()
  const _handlePokemonClick = (url: string) => {
    setChosenPokemonUrl(url)
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
        loader={<Loading key={0} />}>
        <div className='grid grid-cols-1 gap-4 w-full'>
          {pages.map((page) => page.items.map((pokemon, index) => <PokemonListItem
            onClick={_handlePokemonClick}
            key={index}
            pokemon={pokemon} />))}
        </div>
      </InfiniteScroll>
      {chosenPokemonUrl && <PokemonModal url={chosenPokemonUrl} />}
    </div>
  )
}

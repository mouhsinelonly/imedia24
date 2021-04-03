import Head from 'next/head'
import { usePokemonsList } from '@hooks/usePokemonsList'
export default function Home() {
  const { pages } = usePokemonsList()
  console.log(pages)
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-wrap'>
        {pages.map((page) => page.items.map(pokemon => <div className='bg-white p-4 flex-1 w-full' key={pokemon.name}>{pokemon.name}ss</div>))}
      </main>
    </div>
  )
}

import Head from 'next/head'
import { usePokemonsList } from '@hooks/usePokemonsList'
export default function Home() {
  const { pages } = usePokemonsList()
  console.log(pages)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>
    </div>
  )
}

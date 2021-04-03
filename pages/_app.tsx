import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'

// Create a client
const queryClient = new QueryClient()

// https://pokeapi.co/api/v2/pokemon?offset=20&limit=20

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
}

export default MyApp

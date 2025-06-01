import Head from 'next/head'
import HomePage from '../components/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Spaulding RenoPros</title>
        <meta name="description" content="Kitchens, Baths, Resin Bound Surfaces, Concrete – Spaulding RenoPros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}

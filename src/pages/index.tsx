import Content from '@/components/Content'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='h-screen overflow-y-auto flex flex-col'>
      <Head>
        <title>Coding Tools</title>
        <meta name="description" content="Coding Tools" />
      </Head>
      <header className="relative bg-white p-4">Coding Tools</header>
      <main className="flex-1 bg-gray-100 p-4">
        <Content />
      </main>
    </div>

  )
}

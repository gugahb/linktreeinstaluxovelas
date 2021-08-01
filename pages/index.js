import React from 'react'
import Link from '../components/Link'
import Prismic from 'prismic-javascript'
import Head from 'next/head'

const Index = props => {
  const items = props.data.body[0].items
  const titulo = props.data.body[0].primary.titulo[0].text
  return (    
    <div className='max-w-md mx-auto'>
      <Head>
        <title>Luxo velas</title>
      </Head>

      {/* <pre>{JSON.stringify(props.data.body[0].primary.titulo[0].text, null, 2)}</pre>*/}
      
      <img className='mx-auto mt-10 mb-4 rounded-full h-21 w-21 flex items-center justify-center' src="https://cdn.awsli.com.br/400x350/1988/1988382/logo/d7478aac59.png" width='140px' heigth='140px' alt='Linktree Agência Vide'/>
      <h1 className='mx-auto text-center mb-8 font-bold text-indigo-700 text-lg'>@LuxoVelas</h1>
      <ul>
 
            <li>
              <Link href="https://www.luxovelas.com.br/">Loja Online</Link>
            </li>

            <li>
              <Link href="https://www.instagram.com/luxo_velas">Instagram</Link>
            </li>
            <li>
              <Link href="mailto:contato@luxovelas.com.br">E-mail</Link>
            </li>
            <li>
              <Link href="">Whatsapp</Link>
            </li>
            <li>
              <Link href="">Facebook</Link>
            </li>

      </ul>
    </div>
  )
}

export async function getServerSideProps ({ res }) {
  res.setHeader('Cache-control', 's-maxage=60', 'stale-while-revalidate')
  const client = Prismic.client('https://linktreeinsta.cdn.prismic.io/api/v2')
  const page = await client.getSingle('home')
  console.log(page)
  return {
    props: {
      data: page.data
    }
  }
}

export default Index
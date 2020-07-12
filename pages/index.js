import React from 'react'
import Link from '../components/Link'
import Prismic from 'prismic-javascript'
import Head from 'next/head'

const Index = props => {
  const items = props.data.body[0].items
  const titulo = props.data.body[0].primary.titulo[0].text
  return (    
    <div className='max-w-xl mx-auto'>
      <Head>
        <title>Agência Vide</title>
      </Head>

      {/* <pre>{JSON.stringify(props.data.body[0].primary.titulo[0].text, null, 2)}</pre>*/}
      
      <img className='mx-auto mt-10 mb-4 rounded-full h-21 w-21 flex items-center justify-center' src={props.data.headerimg.url} width='140px' heigth='140px' alt='Linktree Agência Vide'/>
      <h1 className='mx-auto text-center mb-8 font-bold text-indigo-700 text-lg'>{titulo}</h1>
      <ul>
        { items.map(item => {
          return (
            <li>
              <Link href={item.link.url}>{item.texto}</Link>
            </li>
          )
        })}       
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
import React from 'react'
import Link from '../components/Link'
import Head from 'next/head'

const Index = props => {
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
              <Link href="https://api.whatsapp.com/send?phone=5511942147233">Whatsapp</Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/luxovelas">Facebook</Link>
            </li> 
      </ul>
    </div>
  )
}

export default Index
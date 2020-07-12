import React from 'react'
import Link from '../components/Link'

const Index = () => {
  return (
    <div className='max-w-xl'>
      <h1>Linktree VIDE</h1>
      <ul>
        <li>
          <Link href='aaa'>AAA</Link>
        </li>
        <li>
          <Link href='aaa'>BBB</Link>
        </li>
      </ul>
    </div>
  )
}

export default Index
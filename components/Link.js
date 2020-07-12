import React from 'react'

const Link = ({ href, children }) => {
  return (
    <a href={href} className='bg-gray-800 text-white py-4 w-full block text-center hover:bg-white hover:text-gray-800 border-2 border-solid border-gray-800 my-4'>
      {children}
    </a>
  )
}

export default Link
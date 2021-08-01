import React from 'react'

const Link = ({ href, children }) => {
  return (
    <a href={href} className='max-w-md mx-auto rounded-tl-lg rounded-br-lg bg-gray-800 text-white py-4 w-full block text-center hover:bg-gray-200 hover:text-gray-800 border-2 border-solid border-gray-800 my-4'>
      {children} 
    </a>
    
    
  )
}

export default Link
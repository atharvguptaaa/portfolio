import React from 'react'

function Cards(props) {
    const {image}=props;
  return (
    <div className='ml-10 max-w-md overflow-hidden border-2 border-green-600 '>
        
        <img className="w-full" src={image}/>

        </div>
  )
}

export default Cards
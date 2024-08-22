import React from 'react'

function Cards(props) {
    const {image}=props;
  return (
    <div className=' max-w-sm overflow-hidden border-2 border-green-600 '>
        
        <img className="w-full border" src={image}/>

        </div>
  )
}

export default Cards
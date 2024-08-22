import React from 'react'

function Cards(props) {
    const {image}=props;
  return (
    <div className=' max-w-sm border overflow-hidden border-white'>
        
        <img className="w-full border" src={image}/>

        </div>
  )
}

export default Cards

function Cards(props) {
    const {image}=props;
  return (
    <div className='transition-transform duration-300 transform hover:scale-110 w-[400px] h-[200px] ml-10 max-w-md overflow-hidden border-2 border-green-600 '>
        
        <img className="w-full h-full object-cover  grayscale hover:grayscale-0" src={image}/>

        </div>
  )
}

export default Cards
function Cards(props) {
  const { image } = props;

  return (
      <div className='transition-transform duration-300 transform hover:scale-110 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto sm:h-[250px] md:h-[300px] lg:h-[200px] mx-auto max-w-md overflow-hidden border-2 border-green-600'>
          <img
              className="w-full h-full object-cover grayscale hover:grayscale-0"
              src={image}
              alt="Card"
          />
      </div>
  );
}

export default Cards;

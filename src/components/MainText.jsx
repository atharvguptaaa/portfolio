import { TypeAnimation } from 'react-type-animation';

function MainText() {
  return (
    <>

<div className="flex justify-center sm:justify-start font-code tracking-tighter">
  <div className="justify-center sm:justify-start  sm:mt-2 p-6 ml-6 sm:ml-0 text-3xl sm:text-6xl md:text-8xl whitespace-nowrap">
    <TypeAnimation
      sequence={[
        "<Atharv Gupta>",
        1000,
      ]}
      wrapper="span"
      speed={1}
      style={{  display: "inline-block" }}
      repeat={Infinity}
    />
  </div>
</div>

<div className=" -mt-4 sm:mt-4 md:mt-8  flex justify-center sm:justify-start font-code tracking-tighter">
  <div className=" p-6 text-2xl sm:text-4xl md:text-6xl ml-3 sm:ml-0 whitespace-nowrap">
    <TypeAnimation
      className="delay-2000"
      sequence={[
        "<Full-Stack Dev>",
        1000,
      ]}
      wrapper="span"
      speed={1}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  </div>
</div>    

    </>
  )
}

export default MainText
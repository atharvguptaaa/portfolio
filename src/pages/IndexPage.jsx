import React,{useEffect} from 'react'
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import Cards from '../components/Cards';
import BlogggImg from "../assets/bloggg.png";


function IndexPage() {

    useEffect(() => {
        // GSAP animation to increase the size of the 'Projects' text
        gsap.to('#projectsText', { opacity: '100%', duration: 5 });
        gsap.to('#bic', { opacity: '100%', duration: 2 });
      }, []);

      const ProjectData = [
        { name: 'Bloggg', subInfo:'A project', image:BlogggImg },
        { name: 'Firebnb', subInfo:'A project', image:BlogggImg },
        { name: 'TypeDash', subInfo:'A project', image:BlogggImg }
      ]

  return (
    <div id="bic" className='text-white'>
    <div className='flex'>
      <div className=' mt-8 p-6 text-4xl'>
        
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '<Atharv Gupta>',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
      
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: '3em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </div>
    </div>

    <div className='flex'>
      <div className=' mt-8 p-6 text-3xl'>
        
      <TypeAnimation className='delay-2000'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '<Full-Stack Dev>',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </div>
    </div>

    <div id='projectsText' className='text-6xl mt-20'>
        Projects
    </div>
{
ProjectData.map((items)=>(

<div class="flex w-full h-64 mt-10">

  <div class="flex pl-60 w-1/2 border">


  <div className='flex flex-col justify-center '>
    <div className=" text-4xl px-10">
      {items.name} 
    </div>
    <div className=''>
      {items.subInfo}
    </div>

    </div>

  </div>
  <div class="flex items-center justify-center ">
  <Cards image={items.image} />
  </div>
</div>



//   <div className="w-full mt-10 flex  border">
//   <div className="flex space-x-28 items-center justify-between ">
    // <div className='flex flex-col justify-center'>
    // <div className=" text-4xl px-10">
    //   {items.name} 
    // </div>
    // <div>
    //   {items.subInfo}
    // </div>

    // </div>
//     <div className="flex w-full items-center">
//       <Cards image={items.image} />
//     </div>
//   </div>
// </div>

))

}
 
   
  </div>
  )
}

export default IndexPage
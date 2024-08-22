import React,{useEffect} from 'react'
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import Cards from '../components/Cards';
import BlogggImg from "../assets/bloggg.png";
import TypeDashImg from "../assets/TypeDash.png";
import ImageGallery from '../components/ImageGallery/ImageGallery';
function IndexPage() {

    useEffect(() => {
        // GSAP animation to increase the size of the 'Projects' text
        gsap.to('#projectsText', { opacity: '100%', duration: 5 });
        gsap.to('#bic', { opacity: '100%', duration: 2 });
      }, []);

      const ProjectData = [
        { name: 'Bloggg', subInfo:'A Blog Site to share images and text blogs.', image:BlogggImg },
        { name: 'Firebnb', subInfo:'A full-stack hotel booking site. ', image:BlogggImg },
        { name: 'TypeDash', subInfo:'A typing Speed Tester', image:TypeDashImg }
      ]

  return (
    <div id="bic" className='text-white'>
    <div className='flex'>
      <div className=' mt-12 p-6 text-4xl'>
        
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

    <div className="w-fit ">
      <ImageGallery/>
    </div>

    <div id='projectsText' className='text-6xl mt-20 text-green-600'>
        Projects :
    </div>
{
ProjectData.map((items)=>(

<div class="flex w-full h-64 mt-10">

  <div class="flex pl-60 w-1/2  my-auto">


  <div className='flex flex-col text-left  '>
    <div className=" text-4xl">
      {items.name} 
    </div>
    <div className='text-xl mt-2'>
      {items.subInfo}
    </div>

    </div>

  </div>
  <div class="flex items-center justify-center ">
  <Cards image={items.image} />
  </div>
</div>


))

}
 
   
  </div>
  )
}

export default IndexPage
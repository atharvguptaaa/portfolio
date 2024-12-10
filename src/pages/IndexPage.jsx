import {useEffect} from 'react'
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import SkillsComponent from '../components/ImageGallery/SkillsComponent';
import Footer from '../Footer';
import Projects from '../components/Projects';
function IndexPage() {

    useEffect(() => {
        // GSAP animation to increase the size of the 'Projects' text
        gsap.to('#projectsText', { opacity: '100%', duration: 5 });
        gsap.to('#bic', { opacity: '100%', duration: 2 });
      }, []);



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

 
    <div id="aboutMe" className='mt-14'>
      <SkillsComponent/>
    </div>

    <div id='projectsText' className='text-6xl mt-20 text-green-600'>
        Projects :
    </div>

    <div id="projects">
    <Projects/>
    </div>

<div>
  <Footer/>
</div>
 
   
  </div>
  )
}

export default IndexPage
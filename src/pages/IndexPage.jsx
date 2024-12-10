import {useEffect} from 'react'
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import SkillsComponent from '../components/ImageGallery/SkillsComponent';
import Footer from '../Footer';
import Projects from '../components/Projects';
import MainText from '../components/MainText';
function IndexPage() {

    useEffect(() => {
        // GSAP animation to increase the size of the 'Projects' text
        gsap.to('#projectsText', { opacity: '100%', duration: 5 });
        gsap.to('#bic', { opacity: '100%', duration: 2 });
      }, []);



  return (
    <div id="bic" className='text-white'>
  
    <MainText/>

 
    <div id="aboutMe" className='mt-8 sm:mt-14'>
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
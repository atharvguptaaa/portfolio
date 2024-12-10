import BlogggImg from "../assets/bloggg.png";
import firebnb from "../assets/firebnb.png";
import TypeDashImg from "../assets/TypeDash.png";
import Cards from "./Cards";
export default function Projects(){
    const ProjectData = [
        { name: 'Bloggg', subInfo:'A Blog Site to share images and text blogs.', image:BlogggImg },
        { name: 'Firebnb', subInfo:'A full-stack hotel booking site. ', image:firebnb },
        { name: 'TypeDash', subInfo:'A typing Speed Tester', image:TypeDashImg }
      ]
    
    return (
        <div className="flex flex-col gap-12 mt-14 px-6 sm:px-12 lg:px-24">
        {ProjectData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center  lg:justify-between w-full gap-6 lg:gap-8"
          >
            {/* Text Section */}
            <div className="flex flex-col text-center lg:text-left lg:items-start w-full lg:w-1/2 lg:ml-24">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold">{item.name}</div>
              <div className="text-lg sm:text-xl mt-2 text-gray-600">{item.subInfo}</div>
            </div>
  
            {/* Image/Card Section */}
            <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
              <Cards image={item.image} />
            </div>
          </div>
        ))}
      </div>
            
    );
}
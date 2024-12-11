import BlogggImg from "../assets/bloggg.png";
import firebnb from "../assets/firebnb.png";
import TypeDashImg from "../assets/TypeDash.png";
import Cards from "./Cards";

export default function Projects() {
  const ProjectData = [
    {
      name: "Bloggg",
      subInfo:
        "A feature-rich blogging platform enabling users to share images and text-based posts with seamless interaction.",
      image: BlogggImg,
      technologies: ["React", "Redux Toolkit", "Appwrite"],
    },
    {
      name: "Firebnb",
      subInfo:
        "A full-stack hotel booking application providing users with a robust interface for seamless reservation management.",
      image: firebnb,
      technologies: ["MongoDB", "Express.js", "React"],
    },
    {
      name: "TypeDash",
      subInfo:
        "An interactive typing speed testing application measuring speed and accuracy with real-time feedback.",
      image: TypeDashImg,
      technologies: ["React", "Tailwind CSS", "Custom API"],
    },
  ];

  return (
    <div className="flex flex-col gap-12 mt-14 px-6 sm:px-12 lg:px-24">
      {ProjectData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center lg:justify-between w-full gap-6 lg:gap-8"
        >
          {/* Text Section */}
          <div className="flex flex-col text-center lg:text-left lg:items-start w-full lg:w-1/2 lg:ml-24">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {item.name}
            </div>
            <div className="text-lg sm:text-xl mt-2 text-gray-600">
              {item.subInfo}
            </div>

            {/* Technologies Section */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
              {item.technologies.map((tech, techIndex) => (
                <button
                  key={techIndex}
                  className="px-4 py-2 bg-green-400 text-black text-md rounded-lg hover:bg-green-600"
                >
                  {tech}
                </button>
              ))}
            </div>
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

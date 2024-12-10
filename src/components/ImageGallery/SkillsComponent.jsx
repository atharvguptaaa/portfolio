import StackIcon from "tech-stack-icons";

const skills = [
  "JAVASCRIPT", "C++", "REACT.JS", "NODE.JS", "VITE", "MONGODB", 
  "HTML", "CSS", "MYSQL", "GIT", "TAILWIND", "GITHUB", "NPM", 
  "FIREBASE", "GITHUB PAGES", "VERCEL", "EXPRESS.JS", "JWT", 
  "TYPESCRIPT", "PYTHON"
];

const skillsIcons = {
  "JAVASCRIPT": <StackIcon name="js" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "C++": <StackIcon name="c++" className="w-5 h-5 grayscale group-hover:grayscale-0  mt-1" />,
  "REACT.JS": <StackIcon name="reactjs" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "NODE.JS": <StackIcon name="nodejs" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "VITE": <StackIcon name="vitejs" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "MONGODB": <StackIcon name="mongodb" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "HTML": <StackIcon name="html5" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "CSS": <StackIcon name="css3" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "MYSQL": <StackIcon name="mysql" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "GIT": <StackIcon name="git" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "TAILWIND": <StackIcon name="tailwindcss" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "GITHUB": <StackIcon name="github" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "NPM": <StackIcon name="npm" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "FIREBASE": <StackIcon name="firebase" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "GITHUB PAGES": <span className="w-4 h-4 invisible mt-1"></span>, // Placeholder
  "VERCEL": <span className="w-4 h-4 invisible mt-1"></span>,       // Placeholder
  "EXPRESS.JS": <span className="w-4 h-4 invisible mt-1"></span>,   // Placeholder
  "JWT": <span className="w-4 h-4 invisible mt-1"></span>,          // Placeholder
  "TYPESCRIPT": <StackIcon name="typescript" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />,
  "PYTHON": <StackIcon name="python" className="w-5 h-5 grayscale group-hover:grayscale-0 mt-1" />
};

const SkillsComponent = () => {
  return (
    <div className="flex flex-col md:flex-row bg-green-500 text-black p-6 sm:p-10">
    {/* About Me Section */}
    <div className="pr-0 md:pr-8 mb-6 md:mb-0">
      <div className="text-left text-3xl sm:text-4xl font-bold mb-4">
        About Me • Skills
      </div>
      <p className="text-left text-lg sm:text-2xl tracking-tight max-w-3xl mx-auto">
        A fullstack web developer passionate about creating seamless digital experiences. I enjoy bringing ideas to life through innovative code and design, and I’m excited to collaborate on impactful projects in the ever-evolving tech world.
      </p>
    </div>

    {/* Skills Section */}
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="group border-2 border-black text-black text-center bg-green-500 hover:bg-green-600 
            hover:text-slate-50 rounded-md px-6 sm:px-8 py-2 font-semibold text-sm sm:text-lg shadow-md overflow-hidden 
            transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1 
            flex justify-center items-center gap-2"
          >
            <span className="text-lg sm:text-xl">{skillsIcons[skill]}</span> {/* Icon */}
            {skill} {/* Text */}
          </button>
        ))}
      </div>
    </div>
  </div>
  );
};

export default SkillsComponent;

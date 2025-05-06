import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Infinite Scrolling Box",
      description: "Just Like Instagram, this project implements infinite scrolling to load more content as the user scrolls down.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "/infinite-scrolling",
      codeLink: "/infinite-scrolling",
      bgColor: "bg-blue-50"
    },
    {
      title: "Otp-Input",
      description: "Otp input is a React component that allows users to enter OTP codes in a user-friendly manner.",
      technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
      liveLink: "/otp-input",
      codeLink: "/otp-input",
      bgColor: "bg-green-50"
    },
    {
      title: "Password Generator",
      description: "Real-time Password Generator is a React component that generates strong passwords based on user-selected criteria.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "/password-generator",
      codeLink: "/password-generator",
      bgColor: "bg-purple-50"
    },
    {
      title: "Restaurant Booking",
      description: "Restaurant Booking is a React component that allows users to book tables at a restaurant.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "/resturant-booking",
      codeLink: "/resturant-booking",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="text-white">My Projects</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Here are some of my recent works
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${project.bgColor} rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs text-gray-900 font-medium rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a 
                    href={project.liveLink} 
                    className="flex items-center px-4 py-2 bg-blue-950 text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FiExternalLink className="ml-2" />
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code <FiGithub className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
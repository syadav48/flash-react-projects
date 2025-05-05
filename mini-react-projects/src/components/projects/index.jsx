import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Infinite Scrolling Box",
      description: "A full-stack e-commerce solution with cart functionality, user authentication, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "/infinite-scrolling",
      codeLink: "/infinite-scrolling",
      bgColor: "bg-blue-50"
    },
    {
      title: "Task Management App",
      description: "Productivity application with drag-and-drop interface, team collaboration features, and progress tracking.",
      technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
      liveLink: "#",
      codeLink: "#",
      bgColor: "bg-green-50"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with interactive maps and historical data visualization.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveLink: "#",
      codeLink: "#",
      bgColor: "bg-purple-50"
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
                      className="px-3 py-1 bg-white text-xs font-medium rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a 
                    href={project.liveLink} 
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
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
import { 
    FaGithub, 
    FaLinkedin, 
    FaTwitter, 
    FaEnvelope,
    FaCode
  } from 'react-icons/fa';
  
  const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-gray-300 w-full py-3 fixed bottom-0 left-0 right-0 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-xs mb-2 sm:mb-0">
              &copy; {currentYear} My Portfolio. All rights reserved.
            </div>
            
            {/* Quick Links */}
            <div className="flex space-x-6">
              <a href="#projects" className="hover:text-white transition-colors text-xs flex items-center">
                <FaCode className="mr-1" /> Projects
              </a>
              <a href="#contact" className="hover:text-white transition-colors text-xs flex items-center">
                <FaEnvelope className="mr-1" /> Contact
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
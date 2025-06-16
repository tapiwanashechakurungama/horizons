
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-5 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
       <div className="flex justify-center items-center "> 
       <img alt="Company-logo" className="w-12 h-12" src="https://media.licdn.com/dms/image/v2/D4D0BAQHUG3tuhmusew/img-crop_100/B4DZdTk_X9GkAM-/0/1749453896331?e=1755734400&v=beta&t=IgCnGyTWYYAqC6O3uvXAzjWwdlVjZyXsADVjeBL1tdw"/>
         <Link to="/" className="text-2xl font-bold text-primary"> NEICHNICE </Link>
       </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="nav-link font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link font-medium">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link font-medium">
              Services
            </Link>
          </li>
          <li>
            <Link to="/team" className="nav-link font-medium">
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link font-medium">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <ul className="flex flex-col py-4">
            <li className="py-2 px-4">
              <Link 
                to="/" 
                className="block w-full py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-2 px-4">
              <Link 
                to="/about" 
                className="block w-full py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="py-2 px-4">
              <Link 
                to="/services" 
                className="block w-full py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="py-2 px-4">
              <Link 
                to="/team" 
                className="block w-full py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </Link>
            </li>
            <li className="py-2 px-4">
              <Link 
                to="/contact" 
                className="block w-full py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

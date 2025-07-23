import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMendeley } from "react-icons/fa";

export default function Navbar() {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Contact", link: "/contact" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const current = navItems.find((item) => item.link === location.pathname);
    if (current) setActive(current.label);
    setMenuOpen(false); // close menu on route change
  }, [location.pathname]);

  const handleNavClick = (label, link) => {
    setActive(label);
    navigate(link);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo or name */}
        <div className="text-white font-bold text-xl md:text-2xl">
          <FaMendeley />
        </div>

        {/* Hamburger - mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ label, link }) => (
            <button
              key={label}
              onClick={() => handleNavClick(label, link)}
              className="relative group text-white text-lg font-semibold pb-2"
            >
              <span className="relative z-10 px-2">{label}</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20" />
              <div
                className={`absolute bottom-0 left-0 h-[3px] w-full transition-all duration-500 
                ${
                  active === label
                    ? "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
                    : "bg-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-500"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-6 pt-2 bg-black/60 backdrop-blur-sm">
          {navItems.map(({ label, link }) => (
            <button
              key={label}
              onClick={() => handleNavClick(label, link)}
              className="relative group text-white text-lg font-semibold pb-2"
            >
              <span className="relative z-10 px-2">{label}</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20" />
              <div
                className={`absolute bottom-0 left-0 h-[3px] w-full transition-all duration-500 
                ${
                  active === label
                    ? "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
                    : "bg-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-500"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

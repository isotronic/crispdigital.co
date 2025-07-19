import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

interface HeaderProps {
  currentPath?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath = "/" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const isActivePage = (href: string) => {
    if (href === "/" && currentPath === "/") return true;
    if (href !== "/" && currentPath.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Large logo for desktop */}
            <img
              className="hidden md:block h-8 w-auto"
              src="/src/assets/crispdigital-variation.png"
              alt="crispdigital"
            />
            {/* Small logo for mobile */}
            <img
              className="block md:hidden h-8 w-auto"
              src="/src/assets/crispdigital-logo-small.png"
              alt="crispdigital"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-base transition-colors duration-200 ${
                    isActivePage(item.href)
                      ? "text-crisp-green font-bold"
                      : "text-gray-700 hover:text-crisp-green font-normal"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button for desktop */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-crisp-orange hover:bg-crisp-orange/90 text-white px-4 py-2 rounded-2xl text-sm font-medium transition-colors duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-crisp-green focus:outline-none focus:text-crisp-green"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-lg transition-colors duration-200 ${
                    isActivePage(item.href)
                      ? "text-crisp-green font-bold"
                      : "text-gray-700 hover:text-crisp-green font-normal"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/contact"
                className="bg-crisp-orange hover:bg-crisp-orange/90 text-white inline-block px-4 py-2 rounded-2xl text-base font-medium transition-colors duration-200 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

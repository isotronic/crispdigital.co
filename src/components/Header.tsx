import React, { useState, useRef, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

interface HeaderProps {
  currentPath?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath = "/" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false);
  };

  // Close dropdown when clicking outside (for mobile menu)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Website Maintenance", href: "/services/website-maintenance" },
    { name: "WordPress Development", href: "/services/wordpress-development" },
  ];

  const isActivePage = (href: string) => {
    if (href === "/" && currentPath === "/") return true;
    if (href !== "/" && currentPath.startsWith(href)) return true;
    return false;
  };

  const isServicesActive = () => {
    return currentPath.startsWith("/services");
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
              {/* Home */}
              <a
                href="/"
                className={`px-3 py-2 rounded-md text-base transition-colors duration-200 ${
                  isActivePage("/") ? "text-crisp-green font-bold" : "text-gray-700 hover:text-crisp-green font-normal"
                }`}
              >
                Home
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <a
                  href="/services"
                  className={`px-3 py-2 rounded-md text-base transition-colors duration-200 flex items-center ${
                    isServicesActive()
                      ? "text-crisp-green font-bold"
                      : "text-gray-700 hover:text-crisp-green font-normal"
                  }`}
                >
                  Services
                  <HiChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-72 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 py-4 backdrop-blur-sm">
                      <div className="px-4 pb-3 border-b border-gray-100">
                        <h3 className="text-sm font-semibold text-crisp-green uppercase tracking-wide">Our Services</h3>
                      </div>
                      <div className="py-2">
                        {serviceItems.map((service, index) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-crisp-green/5 hover:to-crisp-orange/5 hover:text-crisp-green transition-all duration-200"
                            onClick={closeServicesDropdown}
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-crisp-orange/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-crisp-orange/20 transition-colors duration-200">
                              <span className="text-crisp-orange font-bold text-xs">{index + 1}</span>
                            </div>
                            <div>
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500 group-hover:text-crisp-green/70">
                                {service.name === "Web Development" && "Custom applications & solutions"}
                                {service.name === "Web Design" && "Beautiful, user-focused designs"}
                                {service.name === "Mobile App Development" && "React Native iOS & Android apps"}
                                {service.name === "Website Maintenance" && "Ongoing care & optimisation"}
                                {service.name === "WordPress Development" && "Complete WordPress solutions"}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="px-4 pt-3 border-t border-gray-100">
                        <a
                          href="/services"
                          className="flex items-center justify-center w-full py-2 text-sm font-medium text-crisp-green hover:bg-crisp-green hover:text-white rounded-xl transition-all duration-200"
                          onClick={closeServicesDropdown}
                        >
                          View All Services →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Navigation Items */}
              {navItems.slice(1).map((item) => (
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
              {/* Home */}
              <a
                href="/"
                className={`block px-3 py-2 rounded-md text-lg transition-colors duration-200 ${
                  isActivePage("/") ? "text-crisp-green font-bold" : "text-gray-700 hover:text-crisp-green font-normal"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>

              {/* Services section in mobile */}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <a
                  href="/services"
                  className={`block px-3 py-2 rounded-md text-lg font-semibold transition-colors duration-200 ${
                    isServicesActive() ? "text-crisp-green font-bold" : "text-gray-700 hover:text-crisp-green"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                {serviceItems.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block px-6 py-2 text-base text-gray-600 hover:text-crisp-green transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>

              {/* Other Navigation Items */}
              {navItems.slice(1).map((item) => (
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

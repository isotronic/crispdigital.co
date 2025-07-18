import React from "react";
import { HiMail, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Maintenance", href: "/services/maintenance" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  const resources = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img className="h-8 w-auto" src="/src/assets/crispdigital-variation.png" alt="crispdigital" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner for modern web and mobile development solutions. We create stunning, high-performance
              websites and apps that drive results.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-400">
                <HiMail className="w-4 h-4 mr-2" />
                <a href="mailto:hello@crispdigital.co">hello@crispdigital.co</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-crisp-orange">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-crisp-orange transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-crisp-orange">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-crisp-orange transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-crisp-orange">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-crisp-orange transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-lg font-semibold text-crisp-green mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Get the latest web development tips and insights delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crisp-green focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-crisp-orange hover:bg-crisp-orange/90 text-white rounded-r-md transition-colors duration-200 font-medium"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© {currentYear} crispdigital. All rights reserved.</p>
              <div className="flex items-center space-x-1">
                <span className="text-gray-400 text-sm">Built with</span>
                <span className="text-gray-400 text-sm">☕</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-crisp-green hover:bg-crisp-green/90 text-white p-3 rounded-full shadow-lg transition-colors duration-200 z-40 cursor-pointer"
        aria-label="Back to top"
      >
        <HiArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;

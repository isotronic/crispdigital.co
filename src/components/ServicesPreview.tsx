import React from "react";
import { FaCode, FaPalette, FaMobile, FaTools, FaWordpress } from "react-icons/fa";

const ServicesPreview: React.FC = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-crisp-green mb-4">Our Services</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive digital solutions to help your business thrive in the modern world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-crisp-orange/10 rounded-full mb-4">
            <FaCode className="w-6 h-6 text-crisp-orange" />
          </div>
          <h3 className="font-semibold text-crisp-green mb-2">Web Development</h3>
          <p className="text-gray-600 text-sm">Custom web applications and websites</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-crisp-orange/10 rounded-full mb-4">
            <FaPalette className="w-6 h-6 text-crisp-orange" />
          </div>
          <h3 className="font-semibold text-crisp-green mb-2">Web Design</h3>
          <p className="text-gray-600 text-sm">Beautiful UI/UX and visual design</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-crisp-orange/10 rounded-full mb-4">
            <FaMobile className="w-6 h-6 text-crisp-orange" />
          </div>
          <h3 className="font-semibold text-crisp-green mb-2">React Native Apps</h3>
          <p className="text-gray-600 text-sm">Cross-platform mobile applications</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-crisp-orange/10 rounded-full mb-4">
            <FaTools className="w-6 h-6 text-crisp-orange" />
          </div>
          <h3 className="font-semibold text-crisp-green mb-2">Maintenance</h3>
          <p className="text-gray-600 text-sm">Ongoing support and updates</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-crisp-orange/10 rounded-full mb-4">
            <FaWordpress className="w-6 h-6 text-crisp-orange" />
          </div>
          <h3 className="font-semibold text-crisp-green mb-2">WordPress</h3>
          <p className="text-gray-600 text-sm">Complete sites and management</p>
        </div>
      </div>

      <div className="text-center">
        <a
          href="/services"
          className="bg-crisp-green hover:bg-crisp-green/90 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200"
        >
          View All Services
        </a>
      </div>
    </div>
  );
};

export default ServicesPreview;

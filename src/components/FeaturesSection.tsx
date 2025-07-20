import React from "react";
import { FaCode, FaPalette, FaRocket, FaMobile, FaTools } from "react-icons/fa";

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-crisp-green mb-4">Why Choose crispdigital?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with creative design to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-crisp-green/10 rounded-full mb-6">
              <FaCode className="w-8 h-8 text-crisp-green" />
            </div>
            <h3 className="text-xl font-semibold text-crisp-green mb-4">Custom Development</h3>
            <p className="text-gray-600">
              Tailored solutions built with modern technologies like Astro,React, Node.js, and cloud infrastructure to
              meet your unique business needs.
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-crisp-orange/10 rounded-full mb-6">
              <FaPalette className="w-8 h-8 text-crisp-orange" />
            </div>
            <h3 className="text-xl font-semibold text-crisp-green mb-4">Beautiful Design</h3>
            <p className="text-gray-600">
              Eye-catching, user-friendly designs that captivate your audience and provide exceptional user experiences
              across all devices.
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-crisp-green/10 rounded-full mb-6">
              <FaRocket className="w-8 h-8 text-crisp-green" />
            </div>
            <h3 className="text-xl font-semibold text-crisp-green mb-4">Fast Performance</h3>
            <p className="text-gray-600">
              Lightning-fast loading speeds and optimal performance with modern optimisation techniques and best
              practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;

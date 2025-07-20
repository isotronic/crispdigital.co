import React from "react";
import { FaStar, FaPalette, FaMobileAlt, FaTools, FaWordpress } from "react-icons/fa";

interface ServiceCardProps {
  type: "web-development" | "web-design" | "mobile-app" | "maintenance" | "wordpress";
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ type, title, description, features }) => {
  const getIcon = () => {
    switch (type) {
      case "web-development":
        return <FaStar className="w-8 h-8 mr-3 text-crisp-orange" />;
      case "web-design":
        return <FaPalette className="w-8 h-8 mr-3 text-crisp-orange" />;
      case "mobile-app":
        return <FaMobileAlt className="w-8 h-8 mr-3 text-crisp-orange" />;
      case "maintenance":
        return <FaTools className="w-8 h-8 mr-3 text-crisp-orange" />;
      case "wordpress":
        return <FaWordpress className="w-8 h-8 mr-3 text-crisp-orange" />;
      default:
        return <FaStar className="w-8 h-8 mr-3 text-crisp-orange" />;
    }
  };

  const getServiceUrl = () => {
    switch (type) {
      case "web-development":
        return "/services/web-development";
      case "web-design":
        return "/services/web-design";
      case "mobile-app":
        return "/services/mobile-app-development";
      case "maintenance":
        return "/services/website-maintenance";
      case "wordpress":
        return "/services/wordpress-development";
      default:
        return "/contact";
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex items-center mb-6">
        {getIcon()}
        <h2 className="text-2xl font-bold text-crisp-green">{title}</h2>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What's included:</h3>
        <ul className="space-y-2 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-crisp-orange">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={getServiceUrl()}
          className="inline-block px-6 py-3 rounded-2xl font-medium transition-colors duration-200 bg-crisp-green text-white hover:bg-crisp-green/90"
        >
          Learn More
        </a>
        <a
          href="/contact"
          className="inline-block px-6 py-3 rounded-2xl font-medium transition-colors duration-200 bg-crisp-orange text-white hover:bg-crisp-orange/90"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;

import React from "react";
import { FaStar, FaPalette, FaMobileAlt, FaTools } from "react-icons/fa";

interface ServiceCardProps {
  type: "web-development" | "web-design" | "mobile-app" | "maintenance";
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ type, title, description, features }) => {
  const getIcon = () => {
    switch (type) {
      case "web-development":
        return <FaStar className="w-8 h-8 mr-3" style={{ color: "#cc3f0c" }} />;
      case "web-design":
        return <FaPalette className="w-8 h-8 mr-3" style={{ color: "#cc3f0c" }} />;
      case "mobile-app":
        return <FaMobileAlt className="w-8 h-8 mr-3" style={{ color: "#cc3f0c" }} />;
      case "maintenance":
        return <FaTools className="w-8 h-8 mr-3" style={{ color: "#cc3f0c" }} />;
      default:
        return <FaStar className="w-8 h-8 mr-3" style={{ color: "#cc3f0c" }} />;
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        {getIcon()}
        <h2 className="text-2xl font-bold" style={{ color: "#33673b" }}>
          {title}
        </h2>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What's included:</h3>
        <ul className="space-y-2 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2" style={{ color: "#cc3f0c" }}>
                •
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="/contact"
        className="inline-block px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        style={{ backgroundColor: "#cc3f0c", color: "white" }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#a33409";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#cc3f0c";
        }}
      >
        Get Started
      </a>
    </div>
  );
};

export default ServiceCard;

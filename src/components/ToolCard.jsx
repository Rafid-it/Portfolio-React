import React from 'react';

const ToolCard = ({ title, description, icon, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl max-w-sm m-4">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-3">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="inline-block bg-blue-100 text-blue-500 hover:underline text-sm font-medium px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
    </div>
  );
};

export default ToolCard;
import React from 'react';

const Service = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Full-Stack Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Frontend Development
            </h3>
            <p className="text-gray-600 mb-4">
              Crafting responsive and interactive user interfaces using React.js
              and Tailwind CSS for seamless user experiences.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Custom UI/UX Design</li>
              <li>Responsive Web Design</li>
              <li>Component-Based Architecture</li>
            </ul>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Backend Development
            </h3>
            <p className="text-gray-600 mb-4">
              Building robust server-side applications with secure APIs and
              efficient data management.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>RESTful/GraphQL APIs</li>
              <li>Database Integration</li>
              <li>Scalable Architecture</li>
            </ul>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Full-Stack Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              End-to-end development combining frontend and backend for complete,
              high-performance applications.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Seamless Integration</li>
              <li>Cloud Deployment</li>
              <li>Continuous Support</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 rounded-full font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;





































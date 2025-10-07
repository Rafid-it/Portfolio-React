import React from 'react';
import ToolCard from './ToolCard';

const Projects = () => {
  const projects = [
    {
      title: 'Restaurant Website',
      description:
        'A restaurant website built with React and Tailwind CSS, designed to be fully responsive.',
      link: 'https://restaurant-react-nine-steel.vercel.app/',
    },
    {
      title: 'Task Manager App',
      description:
        'A productivity app built with React, Tailwind CSS, and Firebase, allowing users to manage tasks efficiently.',
      link: 'https://to-do-react-mu-pink.vercel.app/',
    },
    {
      title: 'E-Commerce Pagination Website',
      description:
        'An e-commerce products site built with React and Tailwind CSS, featuring pagination and responsive design.',
      link: 'https://pagination-react-project.vercel.app/',
    },
  ];

  const tools = [
    {
      title: 'React.js',
      description:
        'A JavaScript library for building user interfaces, particularly single-page applications.',
      icon: '⚛️',
      category: 'Development',
    },
    {
      title: 'Next.js',
      description:
        'A React framework for building server-side rendered and static web applications.',
      icon: '▲',
      category: 'Development',
    },
    {
      title: 'Node.js',
      description:
        'A platform for API development, especially for building RESTful APIs.',
      icon: '⚙️',
      category: 'Development',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Projects Section */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target={project.link !== '#' ? '_blank' : undefined}
                rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <h2 className="text-3xl font-bold text-white text-center mt-12 mb-8">
          My Full-Stack Development Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              category={tool.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



   

          























































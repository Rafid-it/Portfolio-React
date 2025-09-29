import React from 'react';
import Images from './Images';
import Rafidul from '/src/assets/Rafidul.jpg';
import ToolCard from './ToolCard';

const Projects = () => {
  const projects = [
    {
      title: 'Resturant Website',
      description:
        'A  Resturant shop built with React and Taiwind and also Responsive',
      link: 'https://restaurant-react-nine-steel.vercel.app/',
    },
    {
      title: 'Task Manager App',
      description:
        'A productivity app built with React with Tailwind & Firebase, allowing users to manage tasks efficiently.',
      link: 'https://to-do-react-mu-pink.vercel.app/',
    },
    {
      title: 'E-Commerce Pagination Website',
      description:
        'This E-Commerce Products site, built with React and Tailwind CSS and also Responsive.',
      link: 'https://pagination-react-project.vercel.app/',
    },
  ];

  const skills = [
    'React',
    'Tailwind CSS',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Git',
    'Firebase',
    'Next.js',
  ];

const tools = [
    {
      title: 'React.js',
      description: 'A JavaScript library for building user interfaces, particularly single-page applications.',
      icon: '⚛️',
      category: 'Development',
    },
    {
      title: 'Next.js',
      description: 'A React framework for building server-side rendered and static web applications.',
      icon: '▲',
      category: 'Development',
    },
    {
      title: 'Node.js',
      description: 'A platform for API development, especially for building RESTful APIs.',
      icon: '⚙️',
      category: 'Development',
    },
];

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container  mx-auto px-4">
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
        <h2 className="text-3xl font-bold text-white text-center mt-12 mb-8">My full-stuck development Tools</h2>
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

        {/* About and Skills Section */}
        <div className="mt-12 border-t pt-8 border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            {/* Left Content: About Me */}
            <div className="text-left">
              <div className="mt-10 w-60 max-w-full">
                <Images imgsrc={Rafidul} imgalt="Profile picture of the developer" />
                <h1 className="font-bold text-white mt-8 text-[20px] hover:text-blue-500">
                  Hi! It's me Rafid. A passionate full-stack developer with expertise in building responsive, user-friendly websites.
                </h1>
              </div>
            </div>

            {/* Right Content: My Key Skills */}
            <div className="text-left  md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">My Key Skills</h4>
              <div className="flex flex-wrap justify-start md:justify-end gap-2 mt-10 ">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;





























































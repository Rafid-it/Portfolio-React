import React from 'react';
import { Code2, Palette, Database, Terminal, GitBranch, Zap } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Palette className="w-7 h-7" />,
      skills: ["React", "Next.js","Tailwind CSS","HTML","CSS"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend & Tools",
      icon: <Database className="w-7 h-7" />,
      skills: ["Node.js", "Express.js", "Firebase","REST & GraphQL", "Git"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Core Technologies",
      icon: <Zap className="w-7 h-7" />,
      skills: [ "JavaScript","Clean Code", "Performance","Responsive Design", "Problem Solving", "Team Collaboration"],
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text  bg-gradient-to-r from-blue-400 to-purple-600">
            My Expertise!
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer passionate about crafting fast, beautiful and user-friendly web experiences 
            with modern technologies and pixel-perfect design.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8
                         hover:bg-white/10 hover:border-white/20 transform hover:scale-[1.02] transition-all duration-500
                         shadow-xl hover:shadow-2xl"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-30 
                            transition-opacity duration-700 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg 
                                group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full 
                                 text-sm font-medium text-gray-200 hover:bg-white/20 hover:border-white/40
                                 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Optional subtle corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 blur-3xl`} />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm md:text-base italic">
            Always learning • Obsessed with performance, accessibility and clean code
          </p>

          {/* CTA BUTTON */}
             <div className="text-center mt-10 lg:mt-20">
              <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 rounded-full font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;




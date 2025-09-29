import React from 'react'

const Skills = () => {
    const skills = ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Node.js", "Git", "Firebase", "Next.js", "Bootstrap CSS"];
    return (
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Skills</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
           I'm a passionate full-stuck developer with expertise in building responsive, user-friendly website. Skilled in React,Next.js,Node.js  & css framework like Tailwind & Bootstrap & also many more. I focus on delivering clean, good code, better user experiences & client's satisfaction. Let's create something extraordinary together!
          </p>
          <h2 className="text-3xl font-bold text-center text-white mb-8 mt-10">My Key Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-10 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-amber-200/20 shadow-lg">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Skills














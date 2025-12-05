import React from 'react';
import { 
  Code2, 
  Server, 
  Globe, 
  ArrowRight,
  CheckCircle2 
} from 'lucide-react';

const Service = () => {
  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-blue-500" />,
      title: "Frontend Development",
      description: "Responsive interfaces with modern frameworks and attention to performance and accessibility.",
      features: [
        "React.js / Next.js Applications",
        "Custom UI/UX Design",
        "Performance Optimization",
       
      ]
    },
    {
      icon: <Server className="w-12 h-12 text-purple-500" />,
      title: "Backend Development",
      description: "Secure, scalable server-side solutions with clean architecture and reliable data handling.",
      features: [
        "Node.js / Nest.js Applications",
        "REST & GraphQL APIs",
        "Authentication & Authorization",
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-emerald-500" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development from concept to deployment — delivering production-ready applications.",
      features: [
        "Next.js Full-Stack Apps",
        "Cloud Deployment (Vercel, AWS, etc.)",
        "Ongoing Maintenance & Support",
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 ">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Professional Full-Stack Development
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I build fast, secure, and scalable web applications tailored to your business needs — 
            from stunning frontends to robust backend systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 
                         hover:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm lg:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 lg:mt-20">
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


































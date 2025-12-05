import React from 'react';
import { Mail, Phone, Linkedin, MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react';

const contactInfo = {
  email: 'khandakerrafidulhaque@gmail.com',
  phone: '+8801812803536',
  phoneDisplay: '+880 1812 803 536',
  linkedin: 'https://www.linkedin.com/in/khandaker-rafidul-haque-751888388/',
  location: 'Dhaka, Bangladesh',
  timezone: 'GMT+6',
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 ">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let's Build Something Great!
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm currently open for new opportunities — 
            full-time, contract or freelance. Have a project? Let's talk!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Email Card */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 
                     hover:border-amber-500/50 hover:bg-gray-900/70 transition-all duration-500 
                     transform hover:-translate-y-3 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="p-5 bg-amber-500/10 rounded-2xl group-hover:bg-amber-500/20 transition-all duration-300 mb-6">
                <Mail className="w-12 h-12 text-amber-400" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Email Me</h3>
              <p className="text-gray-300 font-medium text-sm md:text-base break-all">
                {contactInfo.email}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-amber-400 font-semibold text-sm">
                <span>Send a message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </a>

          {/* Phone & WhatsApp Card */}
          <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 
                        hover:border-green-500/50 hover:bg-gray-900/70 transition-all duration-500 
                        transform hover:-translate-y-3 shadow-2xl overflow-hidden">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="p-5 bg-green-500/10 rounded-2xl mb-6">
                <Phone className="w-12 h-12 text-green-400" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Phone & WhatsApp</h3>
              
              <div className="w-full space-y-5">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="block text-gray-300 font-medium hover:text-white transition-colors"
                >
                  {contactInfo.phoneDisplay}
                </a>

                <a
                  href={`https://wa.me/${contactInfo.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-green-500/10 hover:bg-green-500/20 
                           rounded-2xl text-green-400 font-semibold transition-all duration-300 
                           group border border-green-500/20 hover:border-green-500/40"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Message on WhatsApp</span>
                  <span className="text-xs bg-green-500/20 px-3 py-1 rounded-full ml-2">
                    Replied fast
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 
                     hover:border-blue-500/50 hover:bg-gray-900/70 transition-all duration-500 
                     transform hover:-translate-y-3 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="p-5 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-all duration-300 mb-6">
                <Linkedin className="w-12 h-12 text-blue-400" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">LinkedIn</h3>
              <p className="text-gray-300 text-lg mb-6">
                Let's connect professionally
              </p>
              
              <span className="text-blue-400 font-semibold flex items-center gap-2 text-sm">
                View Profile
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
          </a>
        </div>

        {/* Footer Info */}
        <div className="mt-24 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-gray-400 text-lg">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-amber-400" />
              <span>{contactInfo.location}</span>
            </div>
            <div className="hidden sm:block w-8 border-t border-gray-700" />
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-amber-400" />
              <span>Available in {contactInfo.timezone} timezone</span>
            </div>
          </div>
          
          <p className="mt-6 text-xl text-white font-medium">
            I usually reply within a few hours
          </p>
          
                {/* CTA BUTTON */}
             <div className="text-center mt-8 lg:mt-20">
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

export default Contact;

import React from 'react';
import Images from './Images';
import Rafidul from '/src/assets/Rafidul.jpg';

const Hero = () => (
  <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 rounded-3xl shadow-2xl border border-amber-200/10 backdrop-blur-sm transition-all duration-500 hover:shadow-3xl">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
      {/* Left Content: Text */}
      <div className="lg:col-span-3 text-center lg:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="block">Rafidul Khandaker</span>
          <span className="block text-white">Web Developer</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Crafting seamless, high-performance digital experiences with modern web technologies
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
           <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-gray-900 to-black text-white px-8 py-3 rounded-full font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
          >
            Hire Me
          </a>
          <a
            href="#portfolio"
            className="inline-block bg-transparent border-2 border-gray-900 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>
      {/* Right Content: Image */}
      <div className="lg:col-span-2 flex justify-center lg:justify-end">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-amber-200/20 shadow-xl transform hover:scale-105 transition-transform duration-500">
          <Images
            imgsrc={Rafidul}
            imgalt="Profile picture of Rafidul Khandaker"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;






























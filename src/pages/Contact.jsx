import React from 'react';

const Contact = () => (
  <section id="contact" className="py-16">
    <div className="container mx-auto px-4 hover:scale-105  transition-all duration-300">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Me</h2>
      <div className="max-w-2xl mx-auto  bg-gray-800 backdrop-blur-md rounded-lg p-6 shadow-lg border border-amber-200 border-opacity-20">
        <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
        <p className="text-white text-lg">
          Interested in collaborating or have a project idea? Reach out to me via email at{' '}
          <a
            href="mailto:khandakerrafidulhaque@gmail.com"
            className="text-blue-400 hover:underline"
          >
            khandakerrafidulhaque@gmail.com
          </a>{' '}
          or connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/your-profile"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>.
          <h1 className="text-white font-bold mt-4">
            Call Me{' '}
            <span className="text-blue-400">Phone: 01812803536 (WhatsApp)</span>{' '}
            & if you need any help, knock me anytime on{' '}
            <span className="text-blue-400">WhatsApp or send an email</span>.
          </h1>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;








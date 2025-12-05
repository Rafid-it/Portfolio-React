import Container from './Container';

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white mt-[160px] py-12">
      <Container className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div className="text-center md:text-left">
            <p className="mb-2 text-white font-bold">Bangladesh, Dhaka City</p>
            <p className='mb-2 text-white font-bold'>Portfolio©</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100069097935092"
                className="text-white hover:text-gray-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* GitHub*/}
              <a
                href="https://github.com/Rafid-it" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-12-12-12-12z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/Rafid_khandaker"
                className="text-white hover:text-gray-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

     <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Stay Updated</h3>
            <p className="mb-4 text-amber-100">Join for the latest updates and offers!</p>
            <div className="flex justify-center md:justify-end gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md bg-black text-white placeholder-amber-200 border-none focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="px-4 py-2 bg-black rounded-r-md hover:bg-gray-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

     
        <div className="mt-8 pt-8 border-t border-black text-center text-white">
          <p>&copy;All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;



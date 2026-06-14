const Footer = () => {
  return (
    <footer className="border-t border-[#2a2a2a] bg-primary mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[28px]">
            Let's Build Something Amazing
          </h2>

          <p className="text-secondary mt-4 text-[17px] max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and
            exciting projects. Let's turn ideas into reality.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-[#915EFF] hover:bg-[#7c4dff] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#2a2a2a] mb-8" />

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-2xl font-bold">Sourav</h3>

            <p className="text-secondary mt-2">Full Stack Developer</p>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6 text-secondary">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-10">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Sourav. Crafted with React, Three.js &
            ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

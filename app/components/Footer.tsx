import Button from "./Button";
// Placeholder for the main design text (DESIGN HIVE)
const MainBranding = () => (
  <section className="py-8 md:py-10 lg:py-32 text-center bg-white">
    <h1 className="text-[12vw] leading-none font-extrabold tracking-tight text-black">
      DESIGN HIVE
    </h1>
  </section>
);

const HeroFooter = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-8 lg:px-12 text-black">
      {/* Main Large Text */}
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-left mx-auto mb-10 leading-snug">
        FOCUSED ON QUALITY 
      </h2>
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-right mx-auto mb-10 leading-snug">
        DRIVEN BY CREATIVITY
      </h2>

      {/* Call to Action Button */}
      <div className="flex justify-center mb-16">
        <Button label="TELL US ABOUT YOUR PROJECT" dark />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 max-w-6xl mx-auto">
        {/* Image on the Left */}
        <div className="w-full md:w-1/3 relative h-64 md:h-96 bg-gray-200">
          {/* Using a placeholder for the image for now */}
          <img
            src="/footer.jpg" // You'll need to adjust this path, likely just 'gallery1.jpg'
            alt="Interior design example"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation and Info on the Right */}
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-8 md:gap-16">
          {/* Navigation (Simplified for placement) */}
          <nav className="text-black">
            <h3 className="text-xs font-bold mb-4 tracking-widest opacity-70">
              (NAVIGATION)
            </h3>
            <ul className="text-3xl space-y-2 font-light">
              <li>Home</li>
              <li>About Us</li>
              <li>Projects</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </nav>

          {/* Business Info */}
          <div className="text-black">
            <h3 className="text-xs font-bold mb-4 tracking-widest opacity-70">
              (INFO)
            </h3>
            <p className="text-sm space-y-1">
              <span className="block font-bold">A:</span> Surat, lorem ipsum,
              390034
              <span className="block font-bold">E:</span> info@lorem.com
              <span className="block font-bold">P:</span> 0263383838
              <span className="block font-bold">H:</span> Monday to Friday,
              8:30am - 5:00pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <>
      <div className="flex-grow">
        <HeroFooter />
        <MainBranding />
      </div>
      <footer className="bg-white text-black py-4 px-4 sm:px-8 lg:px-12 border-t border-gray-100">
        <div className="flex flex-wrap justify-between items-center text-xs font-mono uppercase tracking-widest max-w-7xl mx-auto">
          {/* Left Section - Copyright */}
          <p className="mb-2 sm:mb-0">
            © 2025 DESIGN HIVE <span className="mx-2 hidden sm:inline">|</span>{" "}
            SURAT, WE ARE OPEN
          </p>

          {/* Right Section - Links */}
          <div className="flex space-x-6 md:space-x-10 text-gray-700">
            <a href="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-black transition-colors">
              Terms of Service
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram
            </a>
            <p>
              Made by <span className="font-bold">BEMOTION</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

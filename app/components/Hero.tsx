import Button from "./Button";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.jpg')", // replace with your image path
      }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Text content */}
      <div className="absolute bottom-10 left-10 text-white max-w-lg">
        <p className="text-sm leading-relaxed opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </div>

      {/* Explore button */}
      <div className="absolute bottom-10 right-10">
        <Button label="Explore" />
      </div>
    </section>
  );
}

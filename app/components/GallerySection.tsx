export default function GallerySection() {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              LOREM <br /> IPSUM
            </h1>
          </div>
          <div className="text-sm leading-relaxed text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste
              natus error.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="space-y-12">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/gallery1.jpg"
                alt="gallery1 01"
                className="w-full object-cover"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>(01) COLOR OF SIT</span>
                <span>2024</span>
              </div>
            </div>
            <div>
              <img
                src="/gallery2.jpg"
                alt="gallery2"
                className="w-full object-cover"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>(02) LOREM</span>
                <span>2024</span>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/gallery3.jpg"
                alt="gallery 3"
                className="w-full object-cover"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>(03) LOREM IPSUM</span>
                <span>2023</span>
              </div>
            </div>
            <div>
              <img
                src="/gallery4.jpg"
                alt="gallery 04"
                className="w-full object-cover"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>(04) LOREM</span>
                <span>2023</span>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/gallery5.jpg"
                alt="gallery 05"
                className="w-full object-cover"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>(05) LOREM</span>
                <span>UNDER CONSTRUCTION</span>
              </div>
            </div>
            <div>
              <img
                src="/gallery6.jpg"
                alt="gallery 06"
                className="w-full object-cover"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>(06) LOREM</span>
                <span>2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* View All Works Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-black text-white text-xs px-6 py-2 rounded-full hover:bg-gray-800 transition">
            VIEW ALL WORKS
          </button>
        </div>
      </div>
    </section>
  );
}

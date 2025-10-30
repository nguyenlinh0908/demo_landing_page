import Image from "next/image";
import Button from "./Button";

export default function WhyDesignHive() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 md:px-16 py-20 bg-white">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center">
        <p className="text-gray-500 font-medium mb-4">Why Design Hive?</p>
        <h2 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
          Lorem ipsum dolor omnis iset
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>

        <div className="mt-8">
          <Button label="Projects" dark />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative w-full h-[500px] md:h-[700px] rounded-xl overflow-hidden">
        <Image
          src="/interior.jpg"
          alt="Interior design"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

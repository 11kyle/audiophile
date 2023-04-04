import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-[#191919]">
      <div className="relative isolate overflow-hidden">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/home/desktop/image-hero.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/home/tablet/image-header.jpg"
          />
          <Image
            src="/home/mobile/image-header.jpg"
            alt=""
            fill={true}
            priority
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </picture>

        <div className="max-w-[1110px] mx-4 sm:mx-auto">
          <div className="mx-auto lg:mx-0 max-w-md lg:px-8 py-44 sm:py-48 lg:py-56">
            <div className="mb-4 flex justify-center lg:justify-start">
              <div className="relative rounded-full px-3 py-1 uppercase text-sm leading-6 tracking-[10px] text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                New Product
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="uppercase text-4xl font-bold tracking-tight text-white sm:text-6xl">
                XX99 Mark II Headphones
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-orange-500 hover:text-orange-300"
                >
                  See product <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

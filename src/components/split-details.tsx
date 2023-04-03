import Image from "next/image"

export default function SplitDetails() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:left-8 lg:h-full lg:w-1/2 lg:pr-16">
          {/* <img
            src="/shared/desktop/image-best-gear.jpg"
            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          /> */}
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/shared/desktop/image-best-gear.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/shared/tablet/image-best-gear.jpg"
            />
            <Image
              src="/shared/mobile/image-best-gear.jpg"
              alt=""
              width={654}
              height={600}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </picture>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              Bringing you the best audio gear
            </h2>
            <p className="mt-4 text-gray-500">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, 
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you 
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people 
            who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
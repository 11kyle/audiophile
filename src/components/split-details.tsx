import Image from "next/image"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    name: 'Durable',
    description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.',
  },
  {
    name: 'Refillable',
    description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
  },
  {
    name: 'Thoughtfully designed',
    description:
      'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
  },
  { name: 'Locally made', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
]

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
            <h2 id="features-heading" className="font-medium text-gray-500">
              Leatherbound Daily Journal
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Bringing you the best audio gear</p>
            <p className="mt-4 text-gray-500">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, 
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you 
            to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people 
            who make Audiophile the best place to buy your portable audio equipment.
            </p>

            {/* <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl> */}
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"

export default function Gallery({ images }) {
  return (
    <section aria-labelledby="category-heading" className="mt-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="aspect-h-1 aspect-w-2 overflow-hidden sm:rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:relative sm:row-span-2">
            <img
              src={images.third.mobile}
              alt=""
              className="object-cover object-center"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
          </div>
          <div className="aspect-h-1 aspect-w-2 overflow-hidden sm:rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src={images.first.mobile}
              alt=""
              className="object-cover object-center sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
          </div>
          <div className="aspect-h-1 aspect-w-2 overflow-hidden sm:rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src={images.second.mobile}
              alt=""
              className="object-cover object-center sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
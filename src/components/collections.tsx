import Image from "next/image"
import Link from "next/link"

const collections = [
  {
    name: 'Headphones',
    description: 'Work from home accessories',
    imageSrc: '/shared/desktop/image-category-thumbnail-headphones.png',
    imageAlt: 'Collection of high quality, noise cancelling headphones.',
    href: '/headphones',
  },
  {
    name: 'Speakers',
    description: 'Journals and note-taking',
    imageSrc: '/shared/desktop/image-category-thumbnail-speakers.png',
    imageAlt: 'Collection of table-top speakers.',
    href: '/speakers',
  },
  {
    name: 'Earphones',
    description: 'Daily commute essentials',
    imageSrc: '/shared/desktop/image-category-thumbnail-earphones.png',
    imageAlt: 'Collection of in-ear earphones.',
    href: '/earphones',
  },
]

export default function Collections() {
  return (
    <section aria-labelledby="collections-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto pb-16 sm:pb-24 lg:max-w-none lg:pb-32">
          <h2 id="collections-heading" className="text-xl font-bold text-gray-900">
            Collections
          </h2>

          <div className="mt-6 grid grid-cols-3 gap-x-1 sm:gap-x-6">
            {collections.map((collection) => (
              <Link key={collection.name} href={collection.href}>
                <div className="group relative">
                  <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-white group-hover:bg-black group-hover:bg-opacity-10">
                    <Image 
                      src={collection.imageSrc}
                      alt={collection.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw,
                            33vw"
                      className="h-full w-full object-scale-down object-center"
                    />
                  </div>
                  <div className="absolute bottom-1 md:bottom-3 left-1 sm:left-2 md:left-4">
                    <h3 className="text-xs sm:text-sm text-gray-500">
                      {collection.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold leading-4 md:leading-6 text-orange-500">See product <span aria-hidden="true">→</span></p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
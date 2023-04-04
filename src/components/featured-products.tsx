import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <div className="px-6 lg:px-8 py-24 sm:py-40 space-y-4">
      <div className="relative bg-orange-500 rounded-lg overflow-hidden h-[720px]">
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2">
          <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" opacity=".202"><circle cx="472" cy="472" r="235.5"/><circle cx="472" cy="472" r="270.5"/><circle cx="472" cy="472" r="471.5"/></g></svg>
        </div>
        <div className="z-10 absolute top-32 left-1/2 -translate-x-1/2 h-72 w-60">
          <Image 
            src="/home/desktop/image-speaker-zx9.png"
            fill
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-80">
          <h2 className="uppercase text-white text-4xl ">zy9 Speaker</h2>
          <p className="text-gray-200 my-4">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Link
            href="/speakers/zx7-speaker"
            className="text-sm font-semibold leading-6 text-white"
          >
            See product <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="relative bg-gray-100 rounded-lg overflow-hidden h-80">
        <Image 
          src="/home/desktop/image-speaker-zx7.jpg"
          fill
          alt=""
          className="object-cover object-center"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-6">
          <h2 className="uppercase text-2xl">zy7 Speaker</h2>
          <Link
            href="/speakers/zx7-speaker"
            className="text-sm font-semibold leading-6 text-orange-500 hover:text-orange-300"
          >
            See product <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden h-80">
          <Image 
            src="/home/desktop/image-earphones-yx1.jpg"
            fill
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="relative bg-gray-100 rounded-lg h-80">
          <div className="absolute top-1/2 -translate-y-1/2 left-6">
            <h2 className="uppercase text-2xl">yx1 Earphones</h2>
            <Link
              href="/earphones/yx1-earphones"
              className="text-sm font-semibold leading-6 text-orange-500 hover:text-orange-300"
            >
              See product <span aria-hidden="true">→</span>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
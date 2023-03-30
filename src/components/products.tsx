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

import Image from "next/image"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Products({ products }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Protect your device
          </h2>
          <p className="mt-4 text-gray-500">
            As a digital creative, your laptop or tablet is at the center of
            your work. Keep your device safe with a fabric sleeve that matches
            in quality and looks.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  index % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {product.description}
                </p>
              </div>
              <div
                className={classNames(
                  index % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="relative w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.categoryImage.tablet}
                    alt=""
                    width={1378}
                    height={704}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

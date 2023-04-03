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
import Link from "next/link"

type Props = {
  products: [
    {
      name: string
      slug: string
      id: string
      category: string
      description: string
      features: string
      new: boolean
      price: number
      image: {
        desktop: string
        tablet: string
        mobile: string
      }
      categoryImage: {
        desktop: string
        tablet: string
        mobile: string
      }
      gallery: {
        first: {
          desktop: string
          tablet: string
          mobile: string
        }
        second: {
          desktop: string
          tablet: string
          mobile: string
        }
        third: {
          desktop: string
          tablet: string
          mobile: string
        }
      }
      includes: [
        {
          item: string
          quantity: number
        }
      ]
      others: [
        {
          name: string
          slug: string
          image: {
            desktop: string
            tablet: string
            mobile: string
          }
        }
      ]
    }
  ]
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Products({ products }: Props) {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-24 sm:px-6 sm:py-32 md:max-w-7xl md:px-8">

        <div className="space-y-16">
          {products.map((product, index: number) => (
            <div
              key={product.name}
              className="flex flex-col-reverse md:grid md:grid-cols-12 md:items-center md:gap-x-8"
            >
              <div
                className={classNames(
                  index % 2 === 0
                    ? "md:col-start-1"
                    : "md:col-start-8",
                  "mt-6 md:col-span-5 md:row-start-1 md:mt-0"
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 mb-1 text-sm text-gray-500">
                  {product.description}
                </p>
                <Link
                  href={`${product.category}/${product.slug}`}
                  className="text-sm font-semibold leading-6 text-orange-500"
                >
                  See product <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div
                className={classNames(
                  index % 2 === 0
                    ? "md:col-start-6"
                    : "md:col-start-1",
                  "flex-auto md:col-span-7 md:row-start-1"
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

import Image from "next/image"
import Link from "next/link"

type Props = {
  products: [
    {
      slug: string
      name: string
      image: {
        desktop: string
        tablet: string
        mobile: string
      }
    }
  ]
}

export default function RelatedProducts({ products }: Props) {
  // if product slug contains category
  function getHref(product: {
    slug: string
    name: string
    image: {
      desktop: string
      tablet: string
      mobile: string
    }
  }) {
    let href: string = ""

    if (product) {
      switch (true) {
        case product.slug.includes("headphones"):
          href = "/headphones/" + product.slug
          break;
        case product.slug.includes("speaker"):
          href = "/speakers/" + product.slug
          break;
        case product.slug.includes("earphones"):
          href = "/earphones/" + product.slug
          break;
        default:
          break;
      }
    }

    return href
  }

  return (
    <section aria-labelledby="related-heading" className="mt-10 px-4 py-16 sm:px-0">
      <h2 id="related-heading" className="text-xl font-bold text-gray-900">
        Customers also bought
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-6">
        {products.map((product) => (
          <div key={product.slug}>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <Image 
                  src={product.image.desktop}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw,
                           33vw"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
                {/* <p className="relative text-lg font-semibold text-white">{product.price}</p> */}
              </div>
            </div>
            <div className="mt-6">
              <Link
                href={getHref(product)}
                className="relative flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-2 text-sm font-medium text-white hover:bg-orange-300"
              >
                See product<span className="sr-only">, {product.name}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
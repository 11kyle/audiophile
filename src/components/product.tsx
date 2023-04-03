import Gallery from './gallery'
import RelatedProducts from './related-products'
import Features from './features'
import Included from './included'
import Image from 'next/image'
import { useContext } from 'react'
import { ShoppingCartDispatchContext } from '@/lib/shopping-cart-context'

type Props = {
  product:{
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
}

export default function Product({ product }: Props) {
  const dispatch = useContext(ShoppingCartDispatchContext)

  function addToShoppingCart() {
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      imgSrc: product.image.mobile,
      imgAlt: "",
      quantity: 1
    }

    dispatch!({
      type: 'added',
      product: newProduct
    })
    
  }

  return (
    <div className="bg-white">
    
      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto">
          {/* Product */}
          <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
            {/* Image gallery */}
            <div className="relative w-full aspect-square">
              <Image 
                src={product.image.desktop}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw,
                        50vw"
                priority
                className="object-cover object-center sm:rounded-lg"
              />
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 md:mt-0 md:place-self-center sm:px-0">
              {product.new && 
                <p className="py-1 uppercase text-sm leading-6 tracking-[10px] text-orange-500">New Product</p>
              }
              <h1 className="uppercase text-3xl lg:text-5xl font-bold tracking-widest text-gray-900">{product.name}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-2xl font-bold tracking-tight text-gray-900">${product.price}</p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div
                  className="space-y-6 text-base text-gray-500"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-6">
                <div className="mt-10 flex">
                  <button
                    type="button"
                    onClick={addToShoppingCart}
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    Add to cart
                  </button>
                </div>
              </form>

              {/* <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>
              </section> */}
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Features features={product.features} />
            </div>
            <div>
              <Included accessories={product.includes} />
            </div>
          </div>

          <Gallery images={product.gallery} />

          <RelatedProducts products={product.others} />
        </div>
      </main>
    </div>
  )
}

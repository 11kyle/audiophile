import ProductLayout from "@/components/layouts/product-layout";
import Product from "@/components/product";
import { ShoppingCartProvider } from "@/lib/shopping-cart-context";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { product: 'yx1-earphones'} },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const prisma = new PrismaClient()

  const product = await prisma.products.findUnique({
    where: {
      slug: String(context.params?.product)
    }
  })

  return {
    props: { product },
  }
}

export default function EarphoneProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <ShoppingCartProvider>
        <ProductLayout>
          <Product product={product} />
        </ProductLayout>
      </ShoppingCartProvider>
    </>
  )
}
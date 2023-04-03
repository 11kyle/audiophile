import ProductLayout from "@/components/layouts/product-layout";
import Product from "@/components/product"
import { PrismaClient } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { product: 'xx59-headphones'} },
      { params: { product: 'xx99-mark-one-headphones'} },
      { params: { product: 'xx99-mark-two-headphones'} },
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

export default function HeadphoneProductPage({ product }: InferGetStaticPropsType<typeof getStaticPaths>) {
  return (
    <>
      <ProductLayout>
        {product && <Product product={product} />}
      </ProductLayout>
    </>
  )
}
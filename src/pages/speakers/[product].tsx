import ProductLayout from "@/components/layouts/product-layout";
import Product from "@/components/product";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { product: 'zx7-speaker'} },
      { params: { product: 'zx9-speaker'} },
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

export default function SpeakerProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <ProductLayout>
        <Product product={product} />
      </ProductLayout>
    </>
  )
}
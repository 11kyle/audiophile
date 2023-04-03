import CategoryLayout from "@/components/layouts/category-layout";
import Products from "@/components/products";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient()
  const products = await prisma.products.findMany({
    where: {
      category: {
        contains: 'headphones'
      }
    }
  })

  return {
    props: { products },
  }
}

export default function Headphones({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  
  return (
    <>
      <CategoryLayout>
        <Products products={products} />
      </CategoryLayout>
    </>
  )
}
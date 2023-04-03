import { useRouter } from "next/router"
import Collections from "../collections"
import Footer from "../footer"
import Navbar from "../navbar"
import PageHeader from "../page-header"
import SplitDetails from "../split-details"

type Props = {
  children: React.ReactNode
}

export default function CategoryLayout({ children }: Props) {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <PageHeader title={String(router.route).slice(1)} />
      <main className="max-w-[1110px] mx-auto">
        {children}
        <Collections />
        <SplitDetails />
      </main>
      <Footer />
    </>
  )
}
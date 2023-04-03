import { useRouter } from "next/router"
import Collections from "../collections"
import Footer from "../footer"
import Navbar from "../navbar"
// import Navbar from "../nav/navbar"
import SplitDetails from "../split-details"

type Props = {
  children: React.ReactNode
}

export default function ProductLayout({ children }: Props) {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <main className="max-w-[1110px] mx-auto">
        {children}
        <Collections />
        <SplitDetails />
      </main>
      <Footer />
    </>
  )
}
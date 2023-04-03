import Footer from "../footer"
import Hero from "../hero"
import Navbar from "../navbar"
import SplitDetails from "../split-details"

type Props = {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="max-w-[1110px] mx-auto">
        {children}
        <SplitDetails />
      </main>
      <Footer />
    </>
  )
}
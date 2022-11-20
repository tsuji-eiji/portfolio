import Header from "./header"
import Footer from "./footer"


export default function Layout({title, children}) {
  return (
    <>
      <Header />
      <main className="base-color text-black">{children}</main>
      <Footer />
    </>
  )
}
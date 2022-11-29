import Header from "./header"
import Footer from "./footer"


export default function Layout({title, children}) {
  return (
    <div className="wrapper">
      <Header />
      <main className="base-color text-black">{children}</main>
      <Footer />
    </div>
  )
}
import Nav from "./nav"
import Link from "next/link"

export default function Header() {
  return (
    <>
      <header className="sub-color">
        <h1>
          <Link href="/">Tech 24</Link>
        </h1>
        <Nav />
      </header>
    </>
  )
}
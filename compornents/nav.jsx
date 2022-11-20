import Link from "next/link"

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/works">Works</Link></li>
          <li><Link href="/mail">Mail</Link></li>
        </ul>
      </nav>
    </>
  )
}
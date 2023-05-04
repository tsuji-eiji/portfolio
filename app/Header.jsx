"use client"
import Link from "next/link";
import { Merriweather } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useEffect } from "react";

const merriweather = Merriweather({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Header() {

  const pathname = usePathname();
  
  useEffect(() => {
    document.getElementById("home-nav").classList.remove("border-b-4", "border-white");
    document.getElementById("blog-nav").classList.remove("border-b-4", "border-white");
    document.getElementById("work-nav").classList.remove("border-b-4", "border-white");
    // document.getElementById("mail-nav").classList.remove("border-b-4", "border-white");
    
    if (pathname === "/") {
      document.getElementById("home-nav").classList.add("border-b-4", "border-white");
    } else if (pathname.indexOf("/blog") === 0) {
      document.getElementById("blog-nav").classList.add("border-b-4", "border-white");
    } else if (pathname.indexOf("/work") === 0) {
      document.getElementById("work-nav").classList.add("border-b-4", "border-white");
    }
    //  else if (pathname.indexOf("/mail") === 0) {
    //   document.getElementById("mail-nav").classList.add("border-b-4", "border-white");
    // }
  })

  return (
    <header className="bg-gray-800 text-gray-100">
      <div className={merriweather.className}>
        <h1 className="text-center text-4xl lg:text-6xl p-8 lg:p-12">TECH 24</h1>
        <nav className="lg:mx-32">
          <ul className="flex justify-evenly">
            <li><Link id="home-nav" className="nav-link block p-4 text-xl lg:text-4xl" href="/">Home</Link></li>
            <li><Link id="blog-nav" className="nav-link block p-4 text-xl lg:text-4xl" href="/blog">Blog</Link></li>
            <li><Link id="work-nav" className="nav-link block p-4 text-xl lg:text-4xl" href="/work">Work</Link></li>
            {/* <li><Link id="mail-nav" className="nav-link block p-4 text-xl lg:text-4xl" href="/mail">Mail</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

"use client"

import Image from "next/image"
import Link from "next/link"
import NavItem from "../NavItem"

const Navigation = () => {
  const navItems = [
    { title: "Меню", href: "#menu" },
    { title: "Продукция", href: "#products" },
    { title: "О нас", href: "#about" },
    { title: "Карьера", href: "#jobs" },
    { title: "Контакты", href: "#contacts" }
  ]

  return (
    <nav className="flex justify-between">
      <Link className="xl:ml-[20px]" href="/">
        <Image src="/svg/logo.svg" width={184} height={60} alt="logo" />
      </Link>
      <ul className="items-end justify-between gap-[64px] lg:flex hidden">
        {navItems.map(item => (
          <NavItem key={item.title} title={item.title} href={item.href} />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

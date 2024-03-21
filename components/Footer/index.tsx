"use client"

import Image from "next/image"
import Link from "next/link"
import NavItem from "../NavItem"

const Footer = () => {
  const navItems = [
    { title: "Меню", href: "#menu" },
    { title: "Продукция", href: "#products" },
    { title: "О нас", href: "#about" },
    { title: "Карьера", href: "#jobs" },
    { title: "Контакты", href: "#contacts" }
  ]

  return (
    <div className="bg-gradient-to-l from-[#2C2B2B] to-[#000000] w-full p-[80px] flex flex-col">
      <div className="flex justify-between">
        <Link href="/">
          <Image src="/svg/logo.svg" width={184} height={60} alt="logo" />
        </Link>
        <div className="xl:flex hidden items-center">
          <Link href="/">
            <Image src="/svg/inst.svg" width={27} height={27} alt="inst" />
          </Link>
          <Link href="/">
            <Image
              className="ml-[17px]"
              src="/svg/tt.svg"
              width={27}
              height={27}
              alt="tt"
            />
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#2D2D2D] my-[36px]"></div>
      <div className="flex justify-center">
        <ul className="items-end justify-between gap-[64px] lg:flex hidden">
          {navItems.map(item => (
            <NavItem key={item.title} title={item.title} href={item.href} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-[70px]">
        <p className="text-[15px] text-[#626262] leading-[19.95px]">
          ТОО “Aq Anyz”© {new Date().getFullYear()} Все права защищены
        </p>
      </div>
    </div>
  )
}

export default Footer

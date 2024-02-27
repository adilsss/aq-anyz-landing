"use client"
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

interface NavItemProps {
  title: string
  href: string
}

const NavItem: React.FC<NavItemProps> = ({ title, href }) => {
  return (
    <li
      className="text-white leading-6 decoration-1	hover:underline underline-offset-8 text-[20px] font-thin"
      key={title}>
      <AnchorLink href={href}>{title}</AnchorLink>
    </li>
  )
}

export default NavItem

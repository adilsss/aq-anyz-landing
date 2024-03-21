"use client"

import Image from "next/image"
import { useState } from "react"

const MenuItems = () => {
  const menuItems = [
    { title: "Восточная кухня", icon: "🍛" },
    { title: "Шашлык", icon: "🍖" },
    { title: "Пицца", icon: "🍕" },
    { title: "Паста", icon: "🍝" },
    { title: "Салаты", icon: "🥗" },
    { title: "Супы", icon: "🍜" },
    { title: "Завтраки", icon: "🍳" }
  ]

  const [active, setActive] = useState(0)

  return (
    <div className="w-full max-w-full">
      <div className="flex mt-[75px]  overflow-x-scroll xl:overflow-x-visible">
        {menuItems.map((item, idx) => (
          <div
            key={item.title}
            className={`bg-white xl:py-[10px] xl:px-[20px] py-[5px] px-[10px] whitespace-nowrap  rounded-[50px] cursor-pointer mr-[18px] ${
              active === idx ? "border-[1px] border-[#D90217]" : ""
            }`}
            onClick={() => setActive(idx)}>
            <span className="text-[20px]">{item.icon}</span>
            <span className="ml-[10px] text-[20px]">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="xl:block relative hidden">
        <div className="absolute w-[10px] h-[10px] rounded-[50%] bg-[#D90217] bottom-[22px] right-[170px]"></div>
        <div className="absolute bottom-[26px] right-[115px] w-[53px] h-[75px] border-r-2 border-b-2 border-dashed border-[#D90217]"></div>
        <div className="absolute bottom-[100px] right-[1px]">
          <span className="text-[30px] text-[#f6394b] leading-[34.8px]">
            Посмотреть все меню
          </span>
          <Image
            className="mt-[24px]"
            src="/svg/menu-stroke.svg"
            width={309}
            height={2}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  )
}

export default MenuItems

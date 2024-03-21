"use client"
import Image from "next/image"

import AdvantageItem from "../AdvantageItem"

const AdvantagesBlock = () => {
  return (
    <div className="bg-[#f9f9f9] px-[20px] xl:px-[80px]">
      <h1 className="text-[50px] leading-[60.45px] text-black font-bold">
        Наши преимущества
      </h1>
      <div className="mt-[24px]">
        <div className="xl:block hidden">
          <Image src="/svg/red-stroke.svg" width={1160} height={2} alt="bell" />
        </div>
      </div>
      <AdvantageItem />
    </div>
  )
}

export default AdvantagesBlock

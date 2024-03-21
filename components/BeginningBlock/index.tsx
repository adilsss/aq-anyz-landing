"use client"

import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useCallback, useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import BeginningCarousel from "../BeginningCarousel"
import Navigation from "../Navigation"

const BeginningBlock = () => {
  const bgs = [
    "bg-[url('/images/beginning/bg_1.webp')]",
    "bg-[url('/images/beginning/bg_2.webp')]",
    "bg-[url('/images/beginning/bg_3.webp')]"
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [index, setIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      setIndex(emblaApi.selectedScrollSnap())
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      setIndex(emblaApi.selectedScrollSnap())
      if (emblaApi.canScrollNext()) emblaApi.scrollNext()
      else emblaApi.scrollTo(0)
    }
  }, [emblaApi])

  return (
    <div
      className={`xl:h-[982px] h-[1020px]  xl:px-[80px] lpt-[56px] pt-[56px] xl:pl-[40px]  bg-no-repeat bg-cover ${bgs[index]}`}>
      <div className="ml-[20px] lg:ml-0">
        <Navigation />
      </div>
      <div className="flex items-center justify-between">
        <div
          onClick={scrollPrev}
          className="embla__prev w-[73px] h-[73px] hidden xl:flex relative bg-[#0000004D] rounded-[50%] cursor-pointer">
          <div className="absolute top-[25px] left-[26px]">
            <Image
              src="/svg/arr-left-sm.svg"
              width={15}
              height={26}
              alt="arrow"
            />
          </div>
        </div>
        <div className="mt-[125px] flex xl:ml-[54px] ml-[0px] xl:px-[0] px-[20px]">
          <div className=" xl:w-[450px] w-full flex justify-center flex-col items-center xl:items-start">
            <div className="max-w-[436px] ">
              <h1 className="text-[50px] leading-[61.25px] text-white font-extrabold">
                Попробуйте вкус Светлой Легенды!
              </h1>
            </div>
            <div className="max-w-[362px] mt-[36px]">
              <h3 className="text-[25px] leading-[29px] text-white">
                Восточная и Европейская кухня по уникальным рецептам от нашего
                Шефа!
              </h3>
            </div>
            <div className="xl:max-w-[322px]  mt-[36px]">
              <button className="w-full  text-white leading-[29.82px] text-[25px] font-semibold py-[20px] rounded-[15px] bg-gradient-to-b from-[#D90217] to-[#FF4B5C] ">
                Заказать доставку
              </button>
              <button className="w-full mt-[20px] text-white leading-[29.82px] text-[25px] py-[20px] rounded-[15px] bg-[#3131318C]">
                Забронировать стол
              </button>
            </div>
            <div className="mt-[94px] xl:">
              <p className="text-[#7D7D7D] text-[20px] leading-[23.2px]">
                Смотрите меню ниже
              </p>

              <div className="flex justify-center xl:block">
                <AnchorLink href="#menu">
                  <div className="relative mt-[22px]">
                    <div className="w-[73px] h-[73px] bg-black rounded-[50%]"></div>
                    <div className="absolute top-[36px] left-[28px]">
                      <Image
                        src="/svg/arr-down.svg"
                        width={16}
                        height={65}
                        alt="arrow"
                      />
                    </div>
                  </div>
                </AnchorLink>
              </div>
            </div>
          </div>
          <div className="ml-[60px] max-w-[607px] overflow-hidden xl:flex hidden">
            <BeginningCarousel ebla={emblaRef} index={index} />
          </div>
        </div>
        <div
          onClick={scrollNext}
          className="w-[73px] h-[73px] ml-[54px] hidden xl:block relative bg-[#0000004D] rounded-[50%] cursor-pointer">
          <div className="absolute top-[19px] right-[17px]">
            <Image
              src="/svg/arr-right-sm.svg"
              width={38}
              height={38}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeginningBlock

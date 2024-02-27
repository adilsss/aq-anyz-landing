"use client"

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import styles from "./styles.module.css"

const CareersBlock = () => {
  const arr = [
    "Официантов",
    "Поваров",
    "Администраторов",
    "Официантов",
    "Поваров",
    "Администраторов"
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 2000 })
  ])
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

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => setIndex(emblaApi.selectedScrollSnap()))
    }
  }, [emblaApi])

  return (
    <div className="relative xl:flex hidden h-[1014px] justify-between w-full bg-gradient-to-l from-[#2C2B2B] to-[#000000] p-[80px]">
      <div className="w-full max-w-[832px]">
        <div className="w-[832px] ">
          <h3 className="text-[80px] font-bold leading-[88px] text-white">
            Мы в постоянном
          </h3>
          <h3 className="relative text-[80px] font-bold leading-[88px] text-white">
            поиске
          </h3>
          <div className="absolute left-[400px] top-[200px]">
            <Image src="/dotted-arr.svg" width={462} height={162} alt="arrow" />
          </div>
        </div>
        <div className="mt-[62px] max-w-[514px]">
          <p className="text-[30px] leading-[30px] text-white">
            Стань частью нашей замечательной команды!
          </p>
          <br />
          <br />
          <p className="text-[30px] leading-[30px] text-white">
            Нажимай кнопку ниже и переходи на полный список открытых вакансий!
          </p>
          <div className="mt-[60px] max-w-[411px]">
            <div className="flex w-full cursor-pointer items-center justify-center rounded-[20px] bg-gradient-to-r from-[#D90217] to-[#FF4B5C] py-[25px] text-[30px] leading-[29.82px] text-white">
              <div className="flex">
                <span className="ml-[10px] font-semibold">
                  Посмотреть вакансии
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="justify-center ml-[-200px] flex items-center">
        <div className="justify-center flex items-center">
          <div
            onClick={scrollPrev}
            className="embla__prev w-[101px] h-[101px] mr-[39px] flex justify-center items-center bg-[#0000004D] rounded-[50%] cursor-pointer">
            <div>
              <Image src="/arr-left-l.svg" width={50} height={50} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="relative flex h-[733px] w-[422x] justify-center ">
          <div className="absolute top-[-140px]">
            <Image src="/light.svg" width={438} height={296} alt="light" />
          </div>

          <div className="absolute bottom-[100px]  h-[397px] w-[404px] rounded-tl-[15px] rounded-tr-[15px] bg-[url('/images/careers/bg.jpeg')] bg-cover bg-center bg-no-repeat blur-sm"></div>

          <div
            className={` flex h-[733px] w-[422px] justify-center overflow-clip`}
            ref={emblaRef}>
            <div className={`${styles.embla__container}`}>
              <div
                className={` ${styles.embla__slide} bg-[url('/images/careers/item_1.png')]  bg-contain bg-center bg-no-repeat`}></div>
              <div
                className={`  ${styles.embla__slide} bg-[url('/images/careers/item_2.png')] bg-contain bg-center bg-no-repeat`}></div>
              <div
                className={`  ${styles.embla__slide} bg-[url('/images/careers/item_3.png')] bg-contain bg-center bg-no-repeat`}></div>
              <div
                className={`  ${styles.embla__slide} bg-[url('/images/careers/item_4.png')] bg-contain bg-center bg-no-repeat`}></div>
              <div
                className={`  ${styles.embla__slide} bg-[url('/images/careers/item_5.png')] bg-contain bg-center bg-no-repeat`}></div>
              <div
                className={`  ${styles.embla__slide} bg-[url('/images/careers/item_6.png')] bg-contain bg-center bg-no-repeat`}></div>
            </div>
          </div>
        </div>
        <div className="absolute  bottom-[140px] flex w-full items-center justify-center">
          <div className=" relative z-10  flex h-[100px] w-[500px] cursor-pointer items-center justify-center rounded-[20px] bg-[#222222] text-[40px] text-white">
            {arr[index]}
          </div>
        </div>
        <div className=" justify-center flex items-center">
          <div
            onClick={scrollNext}
            className="w-[101px] ml-[39px] h-[101px] flex items-center justify-center  bg-[#0000004D] rounded-[50%] cursor-pointer">
            <div>
              <Image src="/arr-right-l.svg" width={50} height={50} alt="arr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareersBlock

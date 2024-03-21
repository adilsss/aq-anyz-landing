"use client"
import Image from "next/image"
import { useState } from "react"
import YandexMaps from "../YandexMaps"

const RestaurantsBlock = () => {
  const [isHide, setIsHide] = useState(true)
  const [isHide2, setIsHide2] = useState(true)

  setTimeout(() => setIsHide(false), 1500)
  setTimeout(() => setIsHide2(false), 1000)

  const map1 = {
    defaultState: {
      center: [51.122081, 71.436643],
      zoom: 13
    },
    icon: "./images/map-markers/item_1.webp",
    marks: [
      { geometry: [51.114045, 71.438936] },
      { geometry: [51.128755, 71.438262] }
    ]
  }
  const map2 = {
    defaultState: {
      center: [50.998018, 71.374617],
      zoom: 15
    },
    icon: "./images/map-markers/item_2.webp",
    marks: [{ geometry: [50.998018, 71.374617] }]
  }
  const map3 = {
    defaultState: {
      center: [50.998018, 71.374617],
      zoom: 15
    },
    icon: "./images/map-markers/item_3.webp",
    marks: [{ geometry: [50.998018, 71.374617] }]
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full justify-center">
        <h2 className="text-[50px] leading-[60.45px] text-black font-bold">
          Наши филиалы
        </h2>
      </div>
      <div className="xl:justify-center justify-start xl:items-center items-center xl:flex-col flex-row mt-[85px]">
        <div className="flex w-full  justify-center ">
          <div className="w-[538px] h-[512px] rounded-[15px] xl:block hidden">
            <YandexMaps marks={map1} />
          </div>
          <div className="max-w-[447px] w-full xl:ml-[31px] xl:block flex-col flex ml-[10px]">
            <div className="bg-white  h-[364px] rounded-[20px] w-full max-w-[447px] xl:p-[38px] px-[20px]">
              <div className="flex ">
                <Image
                  src="/images/map-markers/item_1.webp"
                  width={74}
                  height={74}
                  alt="marker"
                />
                <div className="ml-[15px]">
                  <p className="text-[25px] leading-[30.22px] font-bold">
                    Aq Anyz рестораны
                  </p>
                  <p className="text-[25px] leading-[29px] text-[#D90217]">
                    2 филиала
                  </p>
                </div>
              </div>
              <div>
                <div className="flex mt-[41px]">
                  <Image
                    src="/svg/pointer.svg"
                    width={14}
                    height={17}
                    alt="pointer"
                  />
                  <p className="text-[25px] leading-[30.22px] ml-[10px]">
                    Ул.Кунаева 14г, жк Нурсая-1
                  </p>
                </div>
                <div className="flex">
                  <Image
                    src="/svg/pointer.svg"
                    width={14}
                    height={17}
                    alt="pointer"
                  />
                  <p className="text-[25px] leading-[30.22px] ml-[10px]">
                    Ул.Кунаева 14г, жк Нурсая-1
                  </p>
                </div>
              </div>
              <div className="mt-[38px]">
                <div className="flex ">
                  <Image
                    src="/svg/calendar.svg"
                    width={24}
                    height={24}
                    alt="calendar"
                  />
                  <p className="text-[25px] leading-[30.22px] ml-[10px]">
                    Будние дни: 9:00 - 00:00
                  </p>
                </div>
                <div className="flex">
                  <p className="text-[25px] leading-[30.22px] ml-[34px]">
                    Выходные дни: 10:00 - 00:00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[20px]">
              <div className="w-full cursor-pointer flex justify-center items-center text-white leading-[29.82px] text-[25px] py-[15px] rounded-[10px] bg-gradient-to-r from-[#D90217] to-[#FF4B5C]">
                <div className="flex">
                  <Image
                    src="/svg/phone.svg"
                    width={18}
                    height={18}
                    alt="phone"
                  />
                  <span className="ml-[10px]">Контакты</span>
                </div>
              </div>
              <div className="w-full cursor-pointer flex justify-center mt-[10px] items-center text-white leading-[29.82px] text-[25px] py-[15px] rounded-[10px] bg-black">
                <div className="flex">
                  <Image
                    src="/svg/pointer-white.svg"
                    width={24}
                    height={24}
                    alt="pointer"
                  />
                  <span className="ml-[10px]">Перейти в 2GIS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#D6D6D6] my-[63px]"></div>
        {!isHide2 && (
          <div className="flex justify-center">
            <div className="w-[538px] h-[512px] rounded-[15px] xl:block hidden">
              <YandexMaps marks={map2} />
            </div>
            <div className="max-w-[447px] w-full ml-[31px]">
              <div className="bg-white xl:p-[38px] px-[20px] flex flex-col justify-between h-[364px] rounded-[20px] w-full max-w-[447px]">
                <div className="flex">
                  <Image
                    src="/images/map-markers/item_2.webp"
                    width={74}
                    height={74}
                    alt="marker"
                  />
                  <div className="ml-[15px] mt-[10px]">
                    <p className="text-[25px] leading-[30.22px] font-bold">
                      Aq Anyz
                    </p>
                    <p className="text-[25px] leading-[30.22px] font-bold">
                      кондитерский мир
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex mt-[41px]">
                    <Image
                      src="/svg/pointer.svg"
                      width={14}
                      height={17}
                      alt="pointer"
                    />
                    <p className="text-[25px] leading-[30.22px] ml-[10px]">
                      Ул.Республики 1Б
                    </p>
                  </div>
                </div>
                <div className="mt-[38px]">
                  <div className="flex ">
                    <Image
                      src="/svg/calendar.svg"
                      width={24}
                      height={24}
                      alt="calendar"
                    />
                    <p className="text-[25px] leading-[30.22px] ml-[10px]">
                      Будние дни: 9:00 - 00:00
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-[25px] leading-[30.22px] ml-[34px]">
                      Выходные дни: 10:00 - 00:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-[20px]">
                <div className="w-full cursor-pointer flex justify-center items-center text-white leading-[29.82px] text-[25px] py-[15px] rounded-[10px] bg-gradient-to-r from-[#D90217] to-[#FF4B5C]">
                  <div className="flex">
                    <Image
                      src="/svg/phone.svg"
                      width={18}
                      height={18}
                      alt="phone"
                    />
                    <span className="ml-[10px]">Контакты</span>
                  </div>
                </div>
                <div className="w-full cursor-pointer flex justify-center mt-[10px] items-center text-white leading-[29.82px] text-[25px] py-[15px] rounded-[10px] bg-black">
                  <div className="flex">
                    <Image
                      src="/svg/pointer-white.svg"
                      width={24}
                      height={24}
                      alt="pointer"
                    />
                    <span className="ml-[10px]">Перейти в 2GIS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full h-[1px] bg-[#D6D6D6] my-[63px]"></div>
        {!isHide && (
          <div className="flex justify-center">
            <div className="w-[538px] h-[512px] rounded-[15px] xl:block hidden">
              <YandexMaps marks={map3} />
            </div>
            <div className="max-w-[447px] w-full ml-[31px]">
              <div className="bg-white xl:p-[38px] px-[20px] flex flex-col justify-between h-[364px] rounded-[20px] w-full max-w-[447px]">
                <div className="flex">
                  <Image
                    src="/images/map-markers/item_3.webp"
                    width={74}
                    height={74}
                    alt="marker"
                  />
                  <div className="ml-[15px] mt-[10px]">
                    <p className="text-[25px] leading-[30.22px] font-bold">
                      Восточный двор ресторан
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex mt-[41px]">
                    <Image
                      src="/svg/pointer.svg"
                      width={14}
                      height={17}
                      alt="pointer"
                    />
                    <p className="text-[25px] leading-[30.22px] ml-[10px]">
                      Ул.Республики 1Б
                    </p>
                  </div>
                </div>
                <div className="mt-[38px]">
                  <div className="flex ">
                    <Image
                      src="/svg/calendar.svg"
                      width={24}
                      height={24}
                      alt="calendar"
                    />
                    <p className="text-[25px] leading-[30.22px] ml-[10px]">
                      Будние дни: 9:00 - 00:00
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-[25px] leading-[30.22px] ml-[34px]">
                      Выходные дни: 10:00 - 00:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-[20px]">
                <div className="w-full cursor-pointer flex justify-center items-center text-white leading-[29.82px] text-[25px] py-[15px] rounded-[10px] bg-gradient-to-r from-[#D90217] to-[#FF4B5C]">
                  <div className="flex">
                    <Image
                      src="/svg/phone.svg"
                      width={18}
                      height={18}
                      alt="phone"
                    />
                    <span className="ml-[10px]">Контакты</span>
                  </div>
                </div>
                <div className="w-full cursor-pointer flex justify-center mt-[10px] items-center text-white leading-[29.82px] text-[25px] py-[15px] rounded-[10px] bg-black">
                  <div className="flex">
                    <Image
                      src="/svg/pointer-white.svg"
                      width={24}
                      height={24}
                      alt="pointer"
                    />
                    <span className="ml-[10px]">Перейти в 2GIS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RestaurantsBlock

"use client"
import Image from "next/image"

const AdvantageItem = () => {
  return (
    <div>
      <div className="xl:block hidden">
        <div>
          <div className="relative  ml-[65px]">
            <div className="w-[93px] h-[132px] border-l-2 border-b-2 border-dashed border-[#FFACB4]"></div>
            <div className="p-[37px] bg-white flex rounded-[15px] max-w-[579px] absolute top-[82px] left-[95px]">
              <Image src="/svg/bell.svg" width={113} height={88} alt="bell" />
              <div className="flex flex-col ml-[43px] max-w-[260px]">
                <h3 className="text-[30px] font-bold leading-[36.27px] text-black">
                  Большие порции
                </h3>
                <p className="mt-[11px]">
                  Все блюда по умолчанию делаются большими порциями
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[378px] r mt-[120px]">
          <div className="relative ml-[65px]">
            <div className="w-[93px] h-[132px] border-l-2 border-b-2 border-dashed border-[#FFACB4]"></div>
            <div className="p-[37px] bg-white rounded-[15px] flex max-w-[579px] absolute top-[82px] left-[95px]">
              <Image src="/svg/car.svg" width={113} height={63} alt="car" />

              <div className="flex flex-col ml-[43px] max-w-[265px]">
                <h3 className="text-[30px] font-bold leading-[36.27px] text-black">
                  Быстрая доставка
                </h3>
                <p className="mt-[11px]">
                  Доставка заказа занимает от 20 до 40 минут
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[675px] mt-[120px]">
          <div className="relative ml-[65px]">
            <div className="w-[93px] h-[132px] border-l-2 border-b-2 border-dashed border-[#FFACB4]"></div>
            <div className="p-[37px] bg-white flex rounded-[15px] max-w-[590px] absolute top-[82px] left-[95px]">
              <Image
                src="/svg/big-calendar.svg"
                width={70}
                height={79}
                alt="cal"
              />

              <div className="flex flex-col  ml-[43px] w-full  max-w-[500px]">
                <h3 className="text-[30px] font-bold w-full leading-[36.27px] text-black">
                  Работаем без выходных
                </h3>
                <p className="mt-[11px]">
                  Будние дни: 09:00-00:00 Выходные дни: 10:00-00:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden block">
        <div className="w-full ">
          <div className="p-[37px] mt-[20px] bg-white flex rounded-[15px] w-full max-w-[579px] ">
            <Image src="/svg/bell.svg" width={113} height={88} alt="bell" />{" "}
            <div className="flex flex-col ml-[43px] max-w-[260px]">
              <h3 className="text-[30px] font-bold leading-[36.27px] text-black">
                Большие порции
              </h3>
              <p className="mt-[11px]">
                Все блюда по умолчанию делаются большими порциями
              </p>
            </div>
          </div>

          <div className="p-[37px] mt-[20px] bg-white flex rounded-[15px] w-full max-w-[579px] ">
            <Image src="/svg/car.svg" width={113} height={63} alt="car" />
            <div className="flex flex-col rounded-[15px] ml-[43px] max-w-[260px]">
              <h3 className="text-[30px] font-bold leading-[36.27px] text-black">
                Быстрая доставка
              </h3>
              <p className="mt-[11px]">
                Доставка заказа занимает от 20 до 40 минут
              </p>
            </div>
          </div>

          <div className="p-[37px] mt-[20px] bg-white rounded-[15px] flex  w-full max-w-[579px] ">
            <Image
              src="/svg/big-calendar.svg"
              width={70}
              height={79}
              alt="cal"
            />

            <div className="flex flex-col ml-[43px] max-w-[260px]">
              <h3 className="text-[30px] font-bold leading-[36.27px] text-black">
                Работаем без выходных
              </h3>
              <p className="mt-[11px]">
                Будние дни: 09:00-00:00 Выходные дни: 10:00-00:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvantageItem

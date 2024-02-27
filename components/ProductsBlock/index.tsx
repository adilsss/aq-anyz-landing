"use client"
import Image from "next/image"

const ProductsBlock = () => {
  return (
    <div className="xl:p-[80px] p-[20px]  bg-gradient-to-tl from-[#D90217] to-[#FF4B5C] xl:h-[1012px] h-[1900px]">
      <div className="xl:flex xl:justify-center xl:items-center">
        <div className="w-full xl:max-w-[662px] flex flex-col">
          <div className="w-full rounded-[20px] bg-[#FFFFFF40] py-[26px] px-[40px]">
            <h3 className="text-[50px] leading-[49.5px] font-bold text-white">
              3 вида
            </h3>
            <h3 className="text-[50px] leading-[49.5px] font-bold text-[#FF909B]">
              нашей продукции
            </h3>
          </div>

          <div className="flex h-[685px] bg-white rounded-[20px] mt-[15px]">
            <div className="bg-[url('/images/products/item_1.png')] bg-center bg-cover w-[319px] h-[661px] mt-[12px] ml-[12px] rounded-[15px]"></div>
            <div className="flex flex-col justify-between py-[30px] w-full max-w-[282px] ml-[30px]">
              <h3 className="text-[35px] leading-[34.65px] font-bold text-black">
                Кондитерские изделия
              </h3>
              <p className="text-[30px] leading-[29.7px] text-[#9B9B9B]">
                Восхитительные торты, пирожные, печенье и множество других
                сладостей, созданные нашими мастерами, станут прекрасным
                дополнением к вашему чаепитию или особому событию.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:ml-[15px] max-w-[675px] flex flex-col w-full">
          <div className="flex h-[332px] bg-white rounded-[20px] xl:mt-0 mt-[20px]">
            <div className="bg-[url('/images/products/item_2.png')]  bg-center bg-cover w-[326px] h-[308px] mt-[12px] ml-[12px] rounded-[15px]"></div>
            <div className="flex flex-col justify-between py-[30px] max-w-[282px] ml-[30px] ">
              <h3 className="text-[35px] leading-[34.65px] font-bold text-black">
                Блюда
              </h3>
              <p className="text-[30px] leading-[29.7px] text-[#9B9B9B]">
                Каждое блюдо создано, чтобы удовлетворить самые изысканные
                вкусовые предпочтения.
              </p>
            </div>
          </div>
          <div className="flex max-h-[367px] bg-white rounded-[20px] mt-[15px] !pb-[30px]">
            <div className="bg-[url('/images/products/item_3.png')] bg-center bg-cover w-[326px] h-[343px] mt-[12px] ml-[12px] rounded-[15px]"></div>
            <div className="flex flex-col justify-between py-[30px] max-w-[282px] ml-[30px] pr-[25px]">
              <h3 className="text-[35px] leading-[34.65px] font-bold text-black">
                Полуфабрикаты
              </h3>
              <p className="text-[30px] leading-[29.7px] text-[#9B9B9B] pt-[40px]">
                Наши полуфабрикаты — это идеальное решение для тех, кто любит
                готовить дома, но ценит свое время.
              </p>
            </div>
          </div>
          <div className="w-full flex  justify-between rounded-[20px] bg-[#FFFFFF40] py-[32px] px-[40px] mt-[15px]">
            <p className="text-[30px] leading-[29.7px] text-white max-w-[467px]">
              Посмотреть нашу продукцию подробнее
            </p>
            <div className="w-[60px] h-[60px] xl:flex hidden items-center justify-center bg-[#E92135] rounded-[50%] cursor-pointer">
              <div>
                <Image
                  src="/products-arr.svg"
                  width={28}
                  height={24}
                  alt="arr"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsBlock

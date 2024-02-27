"use client"

interface MenuCardProps {
  image: string
  title: string
  price: string
  descr: string
}

const MenuCard: React.FC<MenuCardProps> = ({ image, title, price, descr }) => {
  return (
    <div
      className={`cursor-pointer flex flex-col-reverse w-full h-[382px] max-w-[432px] rounded-[15px] bg-center bg-cover ${image}`}>
      <div className="rounded-[15px] p-[27px] bg-white">
        <div className="flex justify-between">
          <p className="text-[25px] leading-[29.82px] font-semibold">{title}</p>
          <p className="text-[25px] leading-[29.82px] font-semibold text-[#D90217]">
            {price} ₸
          </p>
        </div>
        <div className="mt-[17px] max-w-[370px]">
          <span className="text-[15px] leading-[17.4px] text-[#9F9F9F]">
            {descr}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MenuCard

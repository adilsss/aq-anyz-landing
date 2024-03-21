"use client"

import MenuCard from "../MenuCard"
import MenuItems from "../MenuItems"

const MenuBlock = () => {
  const menuCards = [
    {
      image: "bg-[url('/images/menu/item_1.webp')]",
      title: "Гуйру лагман",
      price: "2698",
      descr:
        "Ощутите нежные ароматы специй, обволакивающие каждый кусочек нежного мяса и свежих овощей, плавно утонувших в ароматном бульоне."
    },
    {
      image: "bg-[url('/images/menu/item_2.webp')]",
      title: "Плов Свадебный",
      price: "2598",
      descr:
        "Насыщенный вкус и неповторимая теплота этого блюда принесут радость и благополучие вашему празднику, наполнив его восточным обаянием и изысканным вкусом."
    },
    {
      image: "bg-[url('/images/menu/item_3.webp')]",
      title: "Манты с мясом",
      price: "2588",
      descr:
        "Погрузитесь в нежный вкус наших мантов с мясом, который заставит ваше сердце замирать от восторга! Откройте для себя истинное наслаждение, попробовав наши манты с мясом!"
    },
    {
      image: "bg-[url('/images/menu/item_4.webp')]",
      title: "Кауырма лагман",
      price: "2788",
      descr:
        "Лапша ручной работы в сочетании с обжаренными до золотистой корочки кусочками мяса и свежими овощами, представляет собой идеальное сочетание текстур и ароматов."
    },
    {
      image: "bg-[url('/images/menu/item_5.webp')]",
      title: "Думгаза",
      price: "2548",
      descr:
        "Это удивительное блюдо погружает в мир насыщенных ароматов и глубоких вкусов, благодаря искусному сочетанию мяса, овощей и уникальных специй."
    },

    {
      image: "bg-[url('/images/menu/item_6.webp')]",
      title: "Казан кебаб",
      price: "2898",
      descr:
        "Мясо, медленно тушеное в казане до идеальной мягкости, обогащенное ароматами специй и трав, подается с овощами, придавая блюду невероятную сочность и насыщенный вкус."
    }
  ]
  return (
    <div className="xl:px-[80px] px-[20px]">
      <h1 className="text-[50px] leading-[60.45px] text-black font-bold">
        Наше меню
      </h1>
      <MenuItems />
      <div className="w-full flex justify-between">
        <div className="grid md:grid-cols-[repeat(2,minmax(100px,500px))] xl:grid-cols-[repeat(3,minmax(100px,500px))] mt-[80px] gap-10">
          {menuCards.map(card => (
            <MenuCard
              key={card.title}
              image={card.image}
              title={card.title}
              price={card.price}
              descr={card.descr}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuBlock

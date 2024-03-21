"use client"

const BeginningCarousel = ({ ebla, index }: { ebla: any; index: number }) => {
  const urls = [
    "bg-[url('/images/beginning/item_1.webp')]",
    "bg-[url('/images/beginning/item_2.webp')]",
    "bg-[url('/images/beginning/item_3.webp')]"
  ]

  return (
    <div className="embla -translate-x-[85px]" ref={ebla}>
      <div className="embla__container">
        {urls.map((e, i) => (
          <div
            key={e}
            className={`w-[472px] h-[590px] embla__slide bg-cover ${e} ${
              i != index && "backdrop-blur-md"
            }`}></div>
        ))}
      </div>
    </div>
  )
}

export default BeginningCarousel

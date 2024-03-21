"use client"
import { EmblaCarouselType, EmblaEventType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"

const ReviewsBlock = () => {
  const [index, setIndex] = useState(0)

  const TWEEN_FACTOR_BASE = 0.2

  const numberWithinRange = (
    number: number,
    min: number,
    max: number
  ): number => Math.min(Math.max(number, min), max)

  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 1 })

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === "scroll"

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach(slideIndex => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach(loopItem => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
  }, [emblaApi, tweenScale])

  const reviews = [
    {
      avatar: "bg-[url('/images/reviews/item_1.jpeg')]",
      name: "Нургуль Нуркаева",
      stars: 5,
      comment:
        "Лучшая возможность попробовать разные кухни в одном месте. Качество еды на пять с плюсом👍🏻 Отличный сервис, ребята молодцы, хорошее обслуживание😊"
    },
    {
      avatar: "bg-[url('/images/reviews/item_2.jpeg')]",
      name: "Рамин Даулет",
      stars: 5,
      comment:
        "Кухня отличная! Все вкусно, постоянно заказываю там еду! Хочу отметить что блюда не жирные при том, что это восточная кухня! Повара молодцы одним словом!"
    },
    {
      avatar: "bg-[url('/images/reviews/item_1.jpeg')]",
      name: "Нургуль Нуркаева",
      stars: 5,
      comment:
        "Лучшая возможность попробовать разные кухни в одном месте. Качество еды на пять с плюсом👍🏻 Отличный сервис, ребята молодцы, хорошее обслуживание😊"
    }
  ]

  return (
    <div className="relative xl:block hidden">
      <div className="flex w-full flex-col justify-center items-center">
        <div className="flex justify-center">
          <h2 className="text-[50px] leading-[60.45px] text-black font-bold">
            Отзывы наших гостей
          </h2>
        </div>
        <div
          className={`flex ${styles.embla} justify-center overflow-clip !mt-[85px]`}>
          <div className={`${styles.embla__viewport}`} ref={emblaRef}>
            <div className={styles.embla__container}>
              {reviews.map((item, i) => (
                <div className={`${styles.embla__slide} z-10`} key={i}>
                  <div
                    key={item.comment}
                    className={`w-[750px] embla__slide__number h-[293px] bg-white p-[34px]`}>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <div
                          className={`w-[100px] h-[100px] rounded-[50%] bg-center bg-no-repeat bg-cover ${item.avatar}`}></div>
                        <div className="flex flex-col ml-[20px]">
                          <p className="text-[25px] leading-[30.22px] font-bold">
                            {item.name}
                          </p>

                          <div className="flex mt-[5px]">
                            {Array.from(Array(item.stars)).map((i, e) => (
                              <div key={e}>
                                <Image
                                  src="/svg/star.svg"
                                  width={24}
                                  height={22}
                                  alt="star"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-[30px] text-[25px] font-medium leading-[29px] text-black">
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsBlock

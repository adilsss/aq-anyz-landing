"use client"

const AboutBlock = () => {
  return (
    <div>
      <div>
        <div className="flex xl:px-[80px] px-[20x] xl:justify-center flex-col xl:flex-row">
          <div className="flex h-[593px] max-w-[666px] flex-col rounded-[20px] bg-white">
            <h3 className="from-primary to-danger text-gradient-to-b ml-[40px] mt-[26px] bg-gradient-to-r from-[#D90217] to-[#FF4B5C] bg-clip-text text-[50px] font-bold leading-[60.45px] text-transparent">
              О нас
            </h3>
            <div className=" mt-[80px] p-[40px]">
              <p className="text-[25px] leading-[29.82px] ">
                Мы работаем на рынке Казахстана уже более 10 лет. За это время
                жители и гости страны успели по достоинству оценить нашу кухню,
                а о некоторых ее блюдах уже впору слагать легенды!
              </p>
              <br />
              <p className="text-[25px] leading-[29.82px] ">
                Все эти годы вы были знакомы с семьей наших ресторанов под
                такими названиями как:{" "}
                <span className="text-[#D90217]">«Восточный двор»</span>,
                <span className="text-[#D90217]">«Узбечка №1»</span> и
                <span className="text-[#D90217]">«Z-1»</span>.
              </p>
              <br />
              <p className="text-[25px] leading-[29.82px] ">
                Сохраняя самое лучшее от каждого из них, мы с радостью сообщаем
                Вам, о перезапуске в новом формате под единым именем -{" "}
                <span className="font-semibold text-[#D90217]">AQ AÑYZ</span>
              </p>
            </div>
          </div>
          <div className="ml-[15px] flex flex-col xl:mt-0 mt-[320px]">
            <div className="h-[285px]  max-h-[285px]  xl:w-[666px] w-full max-w-[666px] rounded-[20px] bg-[url('/images/about/item_1.webp')]  bg-cover bg-center bg-no-repeat"></div>
            <div className="mt-[20px] h-[285px] max-h-[285px] xl:w-[666px] w-full max-w-[666px] rounded-[20px] bg-[url('/images/about/item_2.webp')]  bg-cover bg-center bg-no-repeat"></div>
          </div>
        </div>
        <div className="flex h-[999px] items-start">
          <div className="relative h-full w-[40%] xl:block hidden">
            <div className="absolute -left-[150px] top-[25%] flex h-[733px] w-[733px] rotate-[-34.12deg] items-center justify-center  overflow-hidden rounded-[80px] ">
              <div className="absolute -top-[272px] right-[-211px] h-[999px] w-[1499px] rotate-[34.12deg]  rounded-[80px] bg-[url('/images/about/item_3.webp')] bg-cover bg-clip-content bg-center  bg-no-repeat"></div>
            </div>
          </div>
          <div className="mt-[150px] flex flex-col pr-[80px]">
            <div className="flex  w-full max-w-[752px] flex-col rounded-[20px] bg-white px-[30px] py-[20px]">
              <h3 className="from-primary  to-danger text-gradient-to-b bg-gradient-to-r from-[#D90217] to-[#FF4B5C] bg-clip-text text-[50px] font-bold leading-[60.45px] text-transparent">
                Вкус и качество наших блюд
              </h3>
              <br />
              <p className="text-[25px] leading-[29.82px]">
                Мы верим, что вкусное блюдо начинается с качественных
                ингредиентов.
              </p>
            </div>
            <div className="xl:!mr-[49px] mr-[0px] w-full flex max-w-[748px] flex-col rounded-[20px] bg-white px-[30px] py-[20px] mt-[30px] xl:ml-[100px] ml-[0px]">
              <p className="text-[25px] leading-[29px]">
                <span className="font-semibold text-[#D90217]">
                  Наши повара тщательно отбирают только свежие и натуральные
                  продукты для каждого заказа
                </span>
                , гарантируя, что каждое блюдо, выходящее из нашей кухни,
                соответствует высочайшим стандартам вкуса и качества.
              </p>
            </div>
            <div className="flex max-w-[748px] flex-col rounded-[20px] bg-white px-[30px] py-[20px] mt-[30px] xl:ml-[200px] ml-[0px]">
              <p className="text-[25px] leading-[29px]">
                <span className="font-semibold text-[#D90217]">
                  Наше меню разнообразно и может удовлетворить любой вкус
                </span>
                , от классических блюд до эксклюзивных авторских рецептов,
                каждое из которых готовится с душой и творческим подходом.
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-[999px] items-start w-full">
          <div className="mt-[150px] flex flex-col xl:pl-[80px]  w-[70%] items-start">
            <div className="flex xl:w-[704px] xl:mt-0 mt-[200px] w-full flex-col self-end rounded-[20px] bg-white px-[30px] py-[20px]">
              <h3 className="from-primary to-danger text-gradient-to-b bg-gradient-to-r from-[#D90217] to-[#FF4B5C] bg-clip-text text-[50px] font-bold leading-[60.45px] text-transparent">
                Сервис, предоставляемый нашими сотрудниками
              </h3>
              <br />
              <p className="text-[25px] leading-[29.82px]">
                Мы понимаем, что впечатления от посещения начинаются не только с
                еды, но и с качества обслуживания.
              </p>
            </div>
            <div className="flex flex-col xl:w-[660px] w-full self-center rounded-[20px] bg-white px-[30px] py-[20px] mt-[30px] ">
              <p className="text-[25px] leading-[29px]">
                <span className="font-semibold text-[#D90217]">
                  Наша команда — это сердце нашего заведения.
                </span>
                &nbsp; Каждый сотрудник, от официантов до поваров, стремится
                предоставить вам исключительный сервис, который заставит вас
                чувствовать себя особенными и желанными гостями.
              </p>
            </div>
            <div className="flex xl:w-[604px] w-full flex-col rounded-[20px] bg-white px-[30px] py-[20px] mt-[30px]">
              <p className="text-[25px] leading-[29px]">
                Мы обучаем наш персонал быть внимательными к деталям,
                предупредительными и дружелюбными,&nbsp;
                <span className="font-semibold text-[#D90217]">
                  чтобы каждый ваш визит был незабываемым.
                </span>
              </p>
            </div>
          </div>
          <div className="relative h-full w-[20%] xl:block hidden">
            <div className="absolute -left-[30px] top-[25%] flex h-[733px] w-[733px] rotate-[-64.13deg] items-center justify-center  overflow-hidden rounded-[80px] ">
              <div className="absolute -top-[249px] right-[105px] h-[1053px] w-[702px] rotate-[64.13deg]  rounded-[80px] bg-[url('/images/about/item_4.webp')] bg-cover bg-clip-content bg-center  bg-no-repeat"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBlock

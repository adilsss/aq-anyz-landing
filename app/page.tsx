import AboutBlock from "@/components/AboutBlock"
import AdvantagesBlock from "@/components/AdvantagesBlock"
import BeginningBlock from "@/components/BeginningBlock"
import CareersBlock from "@/components/CareersBlock"
import Footer from "@/components/Footer"
import MenuBlock from "@/components/MenuBlock"
import ProductsBlock from "@/components/ProductsBlock"
import RestaurantsBlock from "@/components/RestaurantsBlock"
import ReviewsBlock from "@/components/ReviewsBlock"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <BeginningBlock />
      <div className="mt-[94px]">
        <AdvantagesBlock />
      </div>
      <div id="menu" className="mt-[100px] xl:mt-[422px]">
        <MenuBlock />
      </div>
      <div id="products" className="mt-[197px]">
        <ProductsBlock />
      </div>
      <div id="about" className="xl:mt-[150px] mt-[0px]">
        <AboutBlock />
      </div>
      <div className="mt-[150px]">
        <ReviewsBlock />
      </div>
      <div id="contacts" className="xl:mt-[150px] mt-[750px]">
        <RestaurantsBlock />
      </div>
      <div id="jobs" className="mt-[150px]">
        <CareersBlock />
      </div>
      <Footer />
    </main>
  )
}

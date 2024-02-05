import Categories from "./container/Categories"
import { Intro } from "./container/Intro"
import MostSellProducts from "./container/MostSellProducts"

const Home = () => {
  return (
    <div>
      <Intro />
      <Categories />
      <MostSellProducts />
    </div>
  )
}

export default Home
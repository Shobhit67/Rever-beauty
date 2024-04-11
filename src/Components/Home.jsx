import NavBottom from "./NavBottom";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Footer from "./Footer";

import HairAmlaImg1 from "../images/HAIR/amla Ritha sikkai shampoo/img1.jpg";
import bubblegumCan from "../images/whipped cream soap/img1.jpg";
import diamondSoap from "../images/soaps/diamond soap.jpg";
import eyeLiner from "../images/face/eyeliner price 450--/img1.jpg";

import ButterCream from "../images/body butter and cream/body lotion ( blueberry) price 570-- 300ml/img1.jpg";
import NameSoap from "../images/soaps/img1.jpg";
import MangoScrub from "../images/sugar scrub/mangoScrub.jpg";
import CottonCandy from "../images/whipped cream soap/img2.jpg";

function Home() {
  return (
    <div>
      <Carousel />
      <Cards
        title="Explore Our Collection"
        img1={HairAmlaImg1}
        img2={bubblegumCan}
        img3={diamondSoap}
        img4={eyeLiner}
      />
      <Carousel />
      <Cards
        title="Recently Stokled"
        img1={ButterCream}
        img2={NameSoap}
        img3={MangoScrub}
        img4={CottonCandy}
      />

      <Cards  
        img1={HairAmlaImg1}
        img2={bubblegumCan}
        img3={diamondSoap}
        img4={eyeLiner}
      />
      <Footer />
      <NavBottom />
    </div>
  );
}

export default Home;

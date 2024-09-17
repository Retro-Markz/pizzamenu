import Title from "./Title.jsx";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import DevCard from "./DevCard.jsx";

import("../pizzaData.js");

const PizzaMenu = () => {
  return (
    <>
      <DevCard />
      <div
        className="flex flex-col justify-center items-center 
      md:clex md:flex-col md:justify-center md:items-center
      "
      >
        <div
          className="container flex flex-col justify-center items-center 
      md:clex md:flex-col md:justify-center md:items-center
      
    "
        >
          <Title />

          <Menu />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default PizzaMenu;

import Title from "./Title.jsx";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";
import DevCard from "./DevCard.jsx";

import("../pizzaData.js");

const PizzaMenu = () => {
  return (
    <div className="">
      <DevCard />

      <div className="container flex flex-col justify-center items-center">
        <Title />

        <Menu />

        <Footer />
      </div>
    </div>
  );
};

export default PizzaMenu;

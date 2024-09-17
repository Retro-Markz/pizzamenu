import Title from "./Title.jsx";
import Menu from "./Menu.jsx";
import Footer from "./Footer.jsx";

import("../pizzaData.js");

const PizzaMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Title />
      <Menu />
      <Footer />
    </div>
  );
};

export default PizzaMenu;

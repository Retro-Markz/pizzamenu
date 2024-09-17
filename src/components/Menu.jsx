import PizzaInfo from "./PizzaInfo";
import pizzaData from "../pizzaData";

const Menu = () => {
  return (
    <ul
      className="h-full w-[60vw]  flex items-center flex-wrap justify-center gap-8
    "
    >
      {pizzaData.map((pizza) => (
        <PizzaInfo pizzaObj={pizza} key={pizza.name} />
      ))}
    </ul>
  );
};

export default Menu;

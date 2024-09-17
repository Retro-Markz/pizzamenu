import PizzaInfo from "./PizzaInfo";
import pizzaData from "../pizzaData";

const Menu = () => {
  return (
    <ul className="h-[80vh] w-[60vw]  flex items-center flex-wrap justify-center gap-14">
      {pizzaData.map((pizza) => (
        <PizzaInfo pizzaObj={pizza} key={pizza.name} />
      ))}
    </ul>
  );
};

export default Menu;

import PizzaInfo from "./PizzaInfo";
import pizzaData from "../pizzaData";
import "../styles/menu.css";

const Menu = () => {
  return (
    <ul
      className="list-menu 
    "
    >
      {pizzaData.map((pizza) => (
        <PizzaInfo pizzaObj={pizza} key={pizza.name} />
      ))}
    </ul>
  );
};

export default Menu;

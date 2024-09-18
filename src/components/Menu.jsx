import PizzaInfo from "./PizzaInfo";
import pizzaData from "../pizzaData";
import "../styles/menu.css";

const Menu = () => {
  const pizzas = pizzaData;

  const pizzaNum = pizzas.length;

  return (
    <div className="menuitems">
      {pizzaNum > 0 ? (
        <ul className="list-menu">
          {pizzas.map((pizza) => (
            <PizzaInfo pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p className="h-[80vh]">
          We are still working on our menu, Please come back later
        </p>
      )}
    </div>
  );
};

export default Menu;

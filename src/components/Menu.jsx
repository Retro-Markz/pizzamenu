import PizzaInfo from "./PizzaInfo";
import pizzaData from "../pizzaData";

const Menu = () => {
  return (
    <div className="h-[60vh] w-[80vw]  flex items-center flex-wrap justify-center gap-12">
      <PizzaInfo
        name={pizzaData[0].name}
        photoName={pizzaData[0].photoName}
        ingredients={pizzaData[0].ingredients}
        price={pizzaData[0].price}
      />

      <PizzaInfo
        name={pizzaData[1].name}
        photoName={pizzaData[1].photoName}
        ingredients={pizzaData[1].ingredients}
        price={pizzaData[1].price}
      />

      <PizzaInfo
        name={pizzaData[2].name}
        photoName={pizzaData[2].photoName}
        ingredients={pizzaData[2].ingredients}
        price={pizzaData[2].price}
      />

      <PizzaInfo
        name={pizzaData[3].name}
        photoName={pizzaData[3].photoName}
        ingredients={pizzaData[3].ingredients}
        price={pizzaData[3].price}
      />

      <PizzaInfo
        name={pizzaData[4].name}
        photoName={pizzaData[4].photoName}
        ingredients={pizzaData[4].ingredients}
        price={pizzaData[4].price}
      />
      <PizzaInfo
        name={pizzaData[5].name}
        photoName={pizzaData[5].photoName}
        ingredients={pizzaData[5].ingredients}
        price={pizzaData[5].price}
      />
    </div>
  );
};

export default Menu;

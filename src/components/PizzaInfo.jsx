/* eslint-disable react/prop-types */
import "../styles/pizzaInfo.css";

const PizzaInfo = ({ pizzaObj }) => {
  return (
    <li className={`list-style  ${pizzaObj.soldOut ? "sold-Out" : ""}`}>
      <img
        className="w-32 rounded-full shadow-md"
        src={pizzaObj.photoName}
        alt="pizza_image"
      />
      <h1 className="font-semibold text-2xl font-serif text-center ">
        {pizzaObj.name}
      </h1>
      <p className="w-56 text-center">{pizzaObj.ingredients}</p>
      <h2 className="mt-2 font-semibold text-xl ">
        price $
        <span className="text-red-800">
          {pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}
        </span>
      </h2>
    </li>
  );
};

export default PizzaInfo;

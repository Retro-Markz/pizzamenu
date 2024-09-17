/* eslint-disable react/prop-types */
const PizzaInfo = ({ pizzaObj }) => {
  return (
    <li className=" w-56 flex flex-col justify-center items-center p-2  m-2 bg-blue-50 hover:shadow-slate-200 hover:shadow-xl transition-all bg-opacity-30 rounded-2xl shadow-xl">
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
        price $<span className="text-red-800">{pizzaObj.price}</span>
      </h2>
    </li>
  );
};

export default PizzaInfo;

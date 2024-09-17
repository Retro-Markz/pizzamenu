const PizzaInfo = ({ name, photoName, ingredients, price }) => {
  return (
    <div className="w-64 flex flex-col justify-center items-center p-4 bg-slate-50 bg-opacity-30 rounded-2xl m-4 gap-1 shadow-md">
      <img className="w-48 rounded-lg " src={photoName} alt="pizza_image" />
      <h1 className="font-semibold text-2xl font-serif text-center">{name}</h1>
      <p className="text-center">{ingredients}</p>
      <h2 className="mt-2 font-semibold text-xl ">
        price <span className="text-yellow-300 ">$ {price}</span>
      </h2>
    </div>
  );
};

export default PizzaInfo;

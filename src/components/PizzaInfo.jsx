const PizzaInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center p-14 bg-blue-50 bg-opacity-10 rounded-2xl m-8">
      <img className="w-16 rounded-lg " src=" " alt="pizza_image" />
      <h1 className="font-semibold text-xl font-serif">pizza name</h1>
      <p className="">ingredients</p>
      <h2 className="mt-2 font-semibold">
        price <span className="text-amber-400">$6</span>
      </h2>
    </div>
  );
};

export default PizzaInfo;

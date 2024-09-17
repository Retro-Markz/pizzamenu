const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //if (hour >= openHour && hour <= closeHour) alert("We are currently open!");
  //else alert("we are curretly closed!");

  return (
    <div>
      {!isOpen && (
        <div className="order flex items-center gap-6">
          <p className="text-2xl font-bold text-white ">We are Open</p>
          <button className="py-2 px-10 font-semibold text-xl bg-amber-400 rounded-lg hover:bg-amber-200">
            Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Footer;

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className="">
      {isOpen ? (
        <div className="order flex items-center gap-6">
          <p className="text-2xl font-bold text-white ">
            We are open til {closeHour}:00. visit us online
          </p>
          <button className="py-2 px-10 font-semibold text-xl bg-amber-400 rounded-lg hover:bg-amber-200">
            Order
          </button>
        </div>
      ) : (
        <p className="text-2xl font-bold text-white text-center mb-8">
          Sorry we are closed, we meet yo between {openHour}:00 and {closeHour}
          :00
        </p>
      )}
    </div>
  );
};

export default Footer;

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //if (hour >= openHour && hour <= closeHour) alert("We are currently open!");
  //else alert("we are curretly closed!");

  return (
    <div>
      <h1 className="text-white font-semibold text-2xl">
        {new Date().toLocaleTimeString()}. We are currently Close
      </h1>
    </div>
  );
};

export default Footer;

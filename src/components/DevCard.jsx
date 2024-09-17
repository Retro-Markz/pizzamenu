const DevCard = () => {
  return (
    <div className="fixed bottom-0 m-8 flex items-center gap-4 bg-slate-800 py-2 px-4 rounded-3xl bg-opacity-75 hover:shadow-red-800 hover:shadow-lg hover:bg-red-500 transition-all text-white hover:text-black ">
      <img
        className="w-16  rounded-full "
        src="src/assets/profilePic.jpg"
        alt="profile photo"
      />
      <div className="flex flex-col">
        <h1 className="font-bold  text-xl">Mark</h1>
        <p className="">React Developer</p>
      </div>
    </div>
  );
};

export default DevCard;

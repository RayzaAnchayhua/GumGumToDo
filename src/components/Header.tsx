import gumGum from "../assets/gumGum.svg";

const Header = () => {
  return (
    <nav className="w-full h-[15%] bg-one-piece-color ">
      <div className="my-1 flex flex-row items-center justify-center ">
        <img width={60} src={gumGum} alt="Logo GumGum" />
        <h1 className="font-bold text-6xl text-white">GumGum To Do List</h1>
      </div>
    </nav>
  );
};

export default Header;
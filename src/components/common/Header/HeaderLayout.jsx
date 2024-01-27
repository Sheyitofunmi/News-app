import Header from "./Header";
import NavBar from "./Navbar";

function HeaderLayout() {
  return (
    <div className="border-b-2 border-[#c3b7b7] border-opacity-[23%]">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="lg:pt-[4.5rem] pt-[3.8rem]  md:pt-[3rem]">
        <NavBar />
      </div>
    </div>
  );
}

export default HeaderLayout;

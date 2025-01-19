import { SearchBar } from "../SearchBar";
import { TopBar } from "../Topbar";
import { UserMenu } from "../UserMenu";
import Logo from "../../assets/refftologo.png";
import { Link } from "react-router-dom";
export default function NavbarLayout() {
  return (
    <>
      <header className="">
        <TopBar />
        <div className="bg-purple-500 ">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-8">
            <Link to="/" className="">
              <img src={Logo} alt="Logo" className="h-12 w-auto" />
            </Link>
            <SearchBar />
            <UserMenu />
          </div>
        </div>
      </header>
    </>
  );
}

import { SearchBar } from "../SearchBar";
import { TopBar } from "../Topbar";
import { UserMenu } from "../UserMenu";

export default function NavbarLayout() {
  return (
    <>
      <header className="">
        <TopBar />
        <div className="bg-purple-500 ">
          <div className="container mx-auto px-4 py-4 flex justify-between gap-8">
            <a href="/" className="flex-shrink-0">
              <p className="text-white text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                REFFTO
              </p>
            </a>
            <SearchBar />
            <UserMenu />
          </div>
        </div>
      </header>
    </>
  );
}

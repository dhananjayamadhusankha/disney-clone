import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

function Header() {
  return (
    <header className="fixed w-full z-20 flex top-0 justify-between items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="logo"
          height={100}
          width={120}
          className="cursor-pointer invert dark:invert"
        />
      </Link>
      <div className="flex space-x-2 items-center">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;

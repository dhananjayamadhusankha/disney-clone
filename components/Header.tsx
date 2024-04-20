import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="logo"
          height={90}
        />
      </Link>
    </header>
  );
}

export default Header;

import NavbarDemo from "./NavbarDemo";
import "./css/Navbar.css";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 w-full flex flex-wrap items-center h-fit">
      <div className="logo-container">
        <Image
          src="/images/dct_logo.svg" // Use the static path directly
          alt="DCT Logo" // Provide a meaningful alt text
          width={97}
          height={48}
          className="ml-8 pt-2 "
        />
      </div>
      <NavbarDemo />
    </div>
  );
}

"use client";
import Link from "next/link";
import { Saira } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const saira = Saira({
  variable: "--saira",
  subsets: ["latin"],
});

const Navigation = () => {
  const links = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Resume", path: "/#resume" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Contact", path: "/#contact" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      className={`${saira.className} py-4 flex px-8 lg:px-0 justify-between lg:justify-around sticky top-0 left-0 bg-[#151517] z-50 transition-all ease-in-out duration-300`}
    >
      <Link href="/" className="text-4xl font-extrabold text-white">
        JS<span className="text-[#41A2EB]">.</span>
      </Link>

      <ul className="text-lg text-white space-x-12 font-normal hidden lg:flex">
        {links.map((link) => (
          <li key={link.name} className="inline-block">
            <Link href={link.path} passHref>
              <span className="curly hover:text-[#41A2EB]">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <button className="flex lg:hidden">
        <GiHamburgerMenu
          className="text-white text-3xl"
          onClick={() => setIsNavOpen(true)}
        />
      </button>

      <div
        className={`fixed w-[380px] h-screen top-0 right-0 bg-[#151517] text-center py-5 transition-transform duration-300 ease-in-out ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setIsNavOpen(false)}>
          <IoIosClose className="text-white text-3xl my-10" />
        </button>
        <ul className="text-lg text-white font-normal space-y-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.path} passHref>
                <span className="curly hover:text-[#41A2EB]">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

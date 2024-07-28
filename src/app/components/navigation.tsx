"use client";
import Link from "next/link";
import { Saira } from "next/font/google";
import { useState } from "react";

const saira = Saira({
  variable: "--saira",
  subsets: ["latin"],
});

const Navigation = () => {
  const [hoveredLink, setHoveredLink] = useState("");

  const handleMouseEnter = (link: any) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink("");
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "Blog", path: "/#blog" },
  ];
  return (
    <nav className={`${saira.className} py-8 flex justify-around`}>
      <h1 className="text-4xl font-extrabold text-white">
        JS<span className="text-[#41A2EB]">.</span>
      </h1>
      <ul className="text-lg text-white space-x-12 font-normal flex">
        {links.map((link) => (
          <li key={link.name} className="inline-block">
            <Link href={link.path} passHref>
              <span className="curly hover:text-[#41A2EB]">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

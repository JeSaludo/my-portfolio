import Link from "next/link";
import React from "react";

import { IoMdBook } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});
export default function Button() {
  return (
    <div
      className={`flex gap-4 mx-auto justify-center my-4 ${poppins.className}`}
    >
      <Link
        className={`rounded-2xl flex justify-center gap-2 h-10  items-center  bg-white w-[140px] text-center hover:bg-[#9c9c9c]`}
        href={"/#resume"}
      >
        <IoMdBook className="inline-block " />
        <span>Resume</span>
      </Link>

      <Link
        className={`rounded-2xl flex justify-center gap-2 h-10  items-center  bg-[#202020]  w-[140px] text-center text-white hover:bg-[#232328]`}
        href={"/#contact"}
      >
        <GrContact className="inline-block " />
        <span>Contact</span>
      </Link>
    </div>
  );
}

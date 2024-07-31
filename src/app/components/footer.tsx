"use client";
import Link from "next/link";
import { Saira } from "next/font/google";
import Image from "next/image";
const saira = Saira({
  variable: "--saira",
  subsets: ["latin"],
});

export const Footer = () => {
  return (
    <section>
      <div className="px-5 mx-5">
        <hr className="w-full  bg-white/10" />

        <div className="flex justify-between justify-items-center items-center">
          <h1
            className={`font-light text-lg text-white py-6 ${saira.className}`}
          >
            @2024 / JAN ERIS M. SALUDO
          </h1>
          <div className="flex gap-2">
            <Link href="https://www.facebook.com/ekuzen.1192/">
              <Image
                src={"/contact/facebook.svg"}
                alt="facebook"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/jan-eris-saludo-432b391a9/">
              <Image
                src={"/contact/LinkedIn.svg"}
                alt="Likedin"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://github.com/JeSaludo">
              <Image
                src={"/contact/GitHub.svg"}
                alt="Github"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

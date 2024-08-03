"use client";

import { Saira, Poppins } from "next/font/google";
import Button from "./button";
import Image from "next/image";

import { MdMailOutline } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { VscCalendar } from "react-icons/vsc";
import { VscLocation } from "react-icons/vsc";
import { FaBook } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { IoMdBook } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";

const saira = Saira({
  variable: "--saira",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const Hero = () => {
  return (
    <section id="home">
      <div
        className={` mt-10 mb-[100px] lg:mb-[260px] space-y-4 ${poppins.className}`}
      >
        <div className="mx-auto text-xs lg:text-default w-[170px] lg:w-[250px] rounded-xl px-4 h-8 lg:h-10 flex justify-center items-center text-center bg-[#232328] transition-all ease-in-out duration-300">
          <h1 className="text-white">Hi, I am Jan Eris Saludo</h1>
        </div>

        <h1
          className={`text-white ${saira.className} font-bold text-xl  md:text-4xl lg:text-5xl px-4 mx-auto w-[400px] md:w-[640px] lg:w-[800px] text-center lg:leading-normal transition-all ease-in-out duration-300`}
        >
          Passionate{" "}
          <span className="text-[#3478F6]">full-stack developer</span> with a
          focus on building
          <span className="text-[#3478F6]"> innovative web solutions</span>
        </h1>

        <Button></Button>
      </div>
    </section>
  );
};
export default Hero;

export const About = () => {
  const [isContactOpen, SetContactModal] = useState(false);

  return (
    <motion.section
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
      id="about"
      className="py-10 lg:py-20"
    >
      <div
        className={`space-y-2 lg:flex gap-4 mx-auto w-full max-w-screen-xl place-content-center items-center ${poppins.className}`}
      >
        <div className="flex flex-col lg:block border border-white/15 lg:w-[329px] lg:h-[709px] rounded-2xl p-8 mx-4 relative">
          <div className="flex lg:block gap-6 ">
            <div className=" w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] text-center mx-auto mt-4 lg:my-5">
              <Image
                width={500}
                height={500}
                src={"/resume/profile.png"}
                alt="profile"
                quality={100}
              ></Image>
            </div>
            <div className="w-full my-2 ">
              <h1 className="text-xl font-medium text-white  sm:text-left lg:text-center my-4 ">
                Jan Eris M. Saludo
              </h1>

              <div className="bg-[#2F2F35] w-[111px] h-6 text-white text-[9px] flex justify-center  text-center items-center sm:mx-0 lg:mx-auto rounded-lg">
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
          <div className="lg:hidden absolute top-0 right-0 transition-all ease-in-out duration-300">
            <button
              onClick={() => {
                SetContactModal(!isContactOpen);
              }}
              className="px-5 rounded-tr-xl rounded-bl-xl py-2 text-white border-white/10 border text-xs"
            >
              Show Contact
            </button>
          </div>
          <div
            className={`${isContactOpen ? "block" : "hidden"}
            lg:block
            transition-all ease-in-out duration-300`}
          >
            <hr className="my-8 border-white/10" />
            <div className="space-y-4 ml-8">
              <div className="flex gap-5 ">
                <div className="bg-[#1D1D21] text-[#3478F6]  border border-white/10 w-10 h-10 rounded-md flex justify-center place-content-center items-center">
                  <MdMailOutline />
                </div>
                <div className="flex  items-center  text-white">
                  <div>
                    <h3 className="text-[9px] font-light text-[#8E8A8A]">
                      EMAIL
                    </h3>
                    <p className="text-[10px]">janerissaludo@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 ">
                <div className="bg-[#1D1D21] text-[#3478F6]  border border-white/10 w-10 h-10 rounded-md flex justify-center place-content-center items-center">
                  <IoPhonePortraitOutline />
                </div>
                <div className="flex  items-center  text-white">
                  <div>
                    <h3 className="text-[9px] font-light text-[#8E8A8A]">
                      PHONE
                    </h3>
                    <p className="text-[10px]">+63 927 702 2469</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 ">
                <div className="bg-[#1D1D21] text-[#3478F6]  border border-white/10 w-10 h-10 rounded-md flex justify-center place-content-center items-center">
                  <VscCalendar />
                </div>
                <div className="flex  items-center  text-white">
                  <div>
                    <h3 className="text-[9px] font-light text-[#8E8A8A]">
                      BIRTHDAY
                    </h3>
                    <p className="text-[10px]">January 19, 2002</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 ">
                <div className="bg-[#1D1D21] text-[#3478F6]  border border-white/10 w-11 h-10 rounded-md flex justify-center place-content-center items-center">
                  <VscLocation />
                </div>
                <div className="flex  items-center  text-white">
                  <div>
                    <h3 className="text-[9px] font-light text-[#8E8A8A]">
                      LOCATION
                    </h3>
                    <p className="text-[10px]">
                      Makati City, Metro Manila, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-white/15 mx-4 lg:w-[815px] lg:h-[755px] rounded-2xl  p-8  transition-all ease-in-out duration-300">
          <div className="space-y-3">
            <h1 className="font-bold text-3xl text-white">About Me</h1>
            <div className="bg-[#41A2EB] w-[54px] h-2 rounded-md"></div>
          </div>

          <p className="text-white mx-6  text-xs lg:text-lg my-4 text-justify ">
            Hi there! I recently graduated with a Bachelor of Science and
            Technology in Software Development. I’ve got a solid foundation in
            programming and software creation, and I’m known for being a quick
            learner. I enjoy diving into new technologies and figuring out how
            they work. <br></br>
            <br></br> I’ve tackled a range of projects, from web apps to mobile
            apps, and I’m excited to bring my skills and enthusiasm to a new
            team. Whether it's coding, collaborating, or picking up new tools,
            I'm always ready for the challenge and eager to keep growing.
          </p>

          <h1 className="text-white text-[28px] font-semibold my-4">
            What I'm Doing
          </h1>

          <div className="grid gap-6 transition-all ease-in-out duration-300 lg:grid-cols-2 sm:grid-cols-1">
            <div className="w-full bg-[#1D1D21] h-[112px] rounded-lg flex justify-center items-center px-7">
              <div className="flex gap-4 items-center">
                <div className="bg-[#1D1D21] text-[#3478F6] border border-white/10 w-10 h-10 rounded-md flex justify-center items-center">
                  <FaBook />
                </div>
                <div className="flex-1 flex items-center text-white">
                  <div>
                    <h3 className="text-[16px] font-bold text-white">
                      Learning
                    </h3>
                    <p className="text-[10px] font-medium">
                      I'm currently taking online courses to improve my
                      programming skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#1D1D21] h-[112px] rounded-lg flex justify-center items-center px-7">
              <div className="flex gap-4 items-center">
                <div className="bg-[#1D1D21] text-[#3478F6] border border-white/10 w-10 h-10 rounded-md flex justify-center items-center">
                  <LiaLaptopCodeSolid className="text-2xl" />
                </div>
                <div className="flex-1 flex items-center text-white">
                  <div>
                    <h3 className="text-[16px] font-bold text-white">
                      Frontend Development
                    </h3>
                    <p className="text-[10px] font-medium">
                      I am currently utilizing React and Next.js to create
                      dynamic web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#1D1D21] h-[112px] rounded-lg flex justify-center items-center px-7">
              <div className="flex gap-4 items-center">
                <div className="bg-[#1D1D21] text-[#3478F6] border border-white/10 w-10 h-10 rounded-md flex justify-center items-center">
                  <TbApi className="text-2xl" />
                </div>
                <div className="flex-1 flex items-center text-white">
                  <div>
                    <h3 className="text-[16px] font-bold text-white">
                      Backend Development
                    </h3>
                    <p className="text-[10px] font-medium">
                      I use Laravel for backend development in some projects and
                      Next.js for SSR and API routes in other projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#1D1D21] h-[112px] rounded-lg flex justify-center items-center px-7">
              <div className="flex gap-4 items-center">
                <div className="bg-[#1D1D21] text-[#3478F6] border border-white/10 w-10 h-10 rounded-md flex justify-center items-center">
                  <TbDeviceGamepad2 className="text-2xl" />
                </div>
                <div className="flex-1 flex items-center text-white">
                  <div>
                    <h3 className="text-[16px] font-bold text-white">
                      Game Development
                    </h3>
                    <p className="text-[10px] font-medium">
                      I develop games as a hobby using Unity, leveraging its
                      powerful engine to create immersive and engaging
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export const Resume = () => {
  return (
    <motion.section
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 2 }}
      viewport={{ once: true }}
      id="resume"
      className="py-10 lg:py-20"
    >
      <div
        className={`border border-white/15 max-w-[1152px] rounded-2xl p-8 mx-4 xl:mx-auto ${poppins.className} transition-all ease-in-out duration-300`}
      >
        <div className="flex justify-between items-start">
          <div className="space-y-3">
            <h1 className="font-bold text-3xl text-white">Resume</h1>
            <div className="bg-[#41A2EB] w-[54px] h-2 rounded-md"></div>
          </div>
          <a
            href="/resume/resume-janerissaludo.pdf"
            download
            className="hidden md:flex hover:bg-[#232328] bg-[#1D1D21] w-[160px] h-[50px]  justify-center items-center text-white rounded-md text-[18px]"
          >
            Download
          </a>
          <a
            href="/resume/resume-janerissaludo.pdf"
            download
            className="flex md:hidden hover:bg-[#232328] bg-[#1D1D21] w-[60px] h-[50px]  justify-center items-center text-white rounded-md text-[18px]"
          >
            <AiOutlineDownload />
          </a>
        </div>

        <div className="my-8 lg:mx-12">
          <div className="flex gap-4 justify-items-center items-center">
            <div className="w-10 h-10 border border-white/10 text-[#3478F6] flex justify-center items-center rounded-lg">
              <IoMdBook />
            </div>
            <h1 className="font-medium text-[26px] text-white">Education</h1>
          </div>

          <ol className="relative border-s border-white/10 pl-4 ml-5 text-white ">
            <li>
              <time className="inline-block h-full"></time>
            </li>
            <li className="mb-4 ms-4">
              <Image
                src="/resume/timeline.svg"
                alt="Timeline Dot"
                width={12}
                height={12}
                className="absolute -start-1.5"
              />
              <time className="text-sm font-semibold">Primary School</time>
              <h2 className="text-lg font-medium">
                Lord of Lords Christian School
              </h2>
              <p className="text-sm text-gray-400">2008 - 2014</p>
            </li>

            <li className="mb-4 ms-4">
              <Image
                src="/resume/timeline.svg"
                alt="Timeline Dot"
                width={12}
                height={12}
                className="absolute -start-1.5"
              />
              <time className="text-sm font-semibold">High School</time>
              <h2 className="text-lg font-medium">
                Marinduque National High School
              </h2>
              <p className="text-sm text-gray-400">2014 - 2018</p>
            </li>

            <li className="mb-4 ms-4">
              <Image
                src="/resume/timeline.svg"
                alt="Timeline Dot"
                width={12}
                height={12}
                className="absolute -start-1.5"
              />
              <time className="text-sm font-semibold">Senior High School</time>
              <h2 className="text-lg font-medium">
                Marinduque Midwest College
              </h2>
              <p className="text-sm text-gray-400">2018 - 2020</p>
            </li>
            <li className=" ms-4 ">
              <Image
                src="/resume/timeline.svg"
                alt="Timeline Dot"
                width={12}
                height={12}
                className="absolute -start-1.5"
              />
              <time className="text-sm font-semibold">College</time>
              <h2 className="text-lg font-medium">
                Marinduque State University
              </h2>
              <p className="text-sm font-light font text-gray-400">
                2020 - 2024
              </p>
              <p className="text-sm text-gray-400">
                Bachelor of Science in Information Technology - Major in
                Software Development
              </p>
            </li>
          </ol>

          <div className="my-8">
            <div className="flex gap-4 justify-items-center items-center">
              <div className="w-10 h-10 border border-white/10 text-[#3478F6] flex justify-center items-center rounded-lg">
                <IoMdBook />
              </div>
              <h1 className="font-medium text-[26px] text-white">Experience</h1>
            </div>

            <ol className="relative border-s border-white/10 pl-4 ml-5 text-white ">
              <li className="">
                <time className="inline-block h-full"></time>
              </li>
              <li className=" ms-4 ">
                <Image
                  src="/resume/timeline.svg"
                  alt="Timeline Dot"
                  width={12} // Adjust size as needed
                  height={12} // Adjust size as needed
                  className="absolute -start-1.5"
                />
                <h2 className="text-lg font-medium">
                  Internship - Software Development
                </h2>
                <h2 className="text-lg font-medium">Cloud Manila</h2>
                <p className="text-sm font-light font text-gray-400">
                  February - May 2024
                </p>
                <p className="text-sm text-gray-400">
                  I have extensive experience in identifying and fixing bugs in
                  software systems. I also add new features to existing systems
                  that use AngularJS and ASP.NET, improving their functionality
                  and performance.
                </p>
              </li>
            </ol>
          </div>

          <div className="text-white my-8">
            <h1 className="text-2xl my-4">TechStack</h1>

            <TechStackCard />
          </div>

          <div className="text-white my-8">
            <h1 className="text-2xl my-4">Development Tools</h1>

            <DevCard />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export const Portfolio = () => {
  return (
    <motion.section
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 2 }}
      viewport={{ once: true }}
      id="portfolio"
      className="py-10 lg:py-20"
    >
      <div
        className={`border border-white/15 max-w-[1152px]  rounded-2xl p-8 mx-4 xl:mx-auto ${poppins.className} transition-all ease-in-out duration-300`}
      >
        <div className="space-y-3">
          <h1 className="font-bold text-3xl text-white">Portfolio</h1>
          <div className="bg-[#41A2EB] w-[54px] h-2 rounded-md"></div>
        </div>

        <ul className="my-4 space-x-2 lg:space-x-10 text-white text-xs">
          <button disabled>All</button>
          <button disabled>Web Development</button>
          <button disabled>Game Development</button>
          <button disabled>Applications</button>
        </ul>

        <div className="grid  md:grid-cols-3 gap-4">
          <div>
            <div className="bg-white h-[200px] lg:h-[270px] rounded-lg overflow-hidden relative">
              <Image
                src="/projects/butterfly.png"
                alt="Butterfly Website"
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-110 transition-all ease-in-out duration-200"
              />
            </div>
            <div className="m-2">
              <h1 className="text-white">OFSPTS For Butterfly</h1>
              <p className="text-sm text-gray-300  font-extralight">
                Web Development
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white h-[200px] lg:h-[270px] rounded-lg overflow-hidden relative">
              <Image
                src="/projects/equali.png"
                alt="Equali Website"
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-110 transition-all ease-in-out duration-200"
              />
            </div>{" "}
            <div className="m-2 ">
              <h1 className="text-white">Equali</h1>
              <p className="text-sm text-gray-300  font-extralight">
                Web Development
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white h-[200px] lg:h-[270px] rounded-lg overflow-hidden relative">
              <Image
                src="/projects/nft.png"
                alt="NFT Website"
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-110 transition-all ease-in-out duration-200"
              />
            </div>
            <div className="m-2">
              <h1 className="text-white">NFT - Romance Theme</h1>
              <p className="text-sm text-gray-300  font-extralight">
                Website Design
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white h-[200px] lg:h-[270px] rounded-lg overflow-hidden relative">
              <Image
                src="/projects/knightindungeon.png"
                alt="Knights in Dungeon"
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-110 transition-all ease-in-out duration-200"
              />
            </div>
            <div className="m-2">
              <h1 className="text-white">Knights in Dungeon</h1>
              <p className="text-sm text-gray-300  font-extralight">
                Game Development
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white h-[200px] lg:h-[270px] rounded-lg overflow-hidden relative">
              <Image
                src="/projects/tictactoe.png"
                alt="Tic Tac Toen"
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-110 transition-all ease-in-out duration-200"
              />
            </div>
            <div className="m-2">
              <h1 className="text-white">TicTacToe</h1>
              <p className="text-sm text-gray-300  font-extralight">
                Game Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const techstack = [
  { src: "/techstack/html.svg", name: "HTML" },
  { src: "/techstack/css.svg", name: "CSS" },
  { src: "/techstack/javascript.svg", name: "JavaScript" },
  { src: "/techstack/nodejs.svg", name: "Node.js" },
  { src: "/techstack/react.svg", name: "React" },
  { src: "/techstack/tailwind.svg", name: "TailwindCSS" },
  { src: "/techstack/nextjs.svg", name: "Next.js" },
  { src: "/techstack/mongodb.svg", name: "MongoDB" },
  { src: "/techstack/php.svg", name: "Php" },
  { src: "/techstack/laravel.svg", name: "Laravel" },
  { src: "/techstack/mysql.svg", name: "MySql" },
  { src: "/techstack/c-sharp.svg", name: "C#" },
];
const TechStackCard = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
      {techstack.map((stack) => (
        <div
          key={stack.name} // Add a unique key for each element
          className="flex justify-evenly items-center bg-[#1D1D21] py-2 rounded-lg h-12" // Adjust the height as needed
        >
          <Image
            className="w-6 h-6 lg:w-8 lg:h-8"
            src={stack.src}
            width={40}
            height={40}
            alt={stack.name}
          />
          <h1 className="text-[9px]  lg-text-default">{stack.name}</h1>
        </div>
      ))}
    </div>
  );
};

const developmentTools = [
  { src: "/tools/git.svg", name: "Git" },
  { src: "/tools/github.svg", name: "Github" },
  { src: "/tools/figma.svg", name: "Figma" },
  { src: "/tools/vs.svg", name: "Visual Studio" },
];
const DevCard = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
      {developmentTools.map((tool) => (
        <div
          key={tool.name} // Add a unique key for each element
          className="flex justify-evenly items-center bg-[#1D1D21] py-2 rounded-lg h-12" // Adjust the height as needed
        >
          <Image
            className="w-6 h-6 lg:w-8 lg:h-8"
            src={tool.src}
            width={40}
            height={40}
            alt={tool.name}
          />
          <h1 className="text-[9px] lg-text-default whitespace-nowrap">
            {tool.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export const Contact = () => {
  const [info, setInfo] = useState({
    fname: "",
    email: "",
    message: "",
  });

  const [popupVisible, setPopupVisible] = useState(false); // State for popup visibility
  const [isPending, setTransition] = useState(false);
  const OnSubmit = async (e: any) => {
    e.preventDefault();
    setTransition(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(info),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      setInfo({
        fname: "",
        email: "",
        message: "",
      });
      setTransition(false);
      setPopupVisible(true); // Show popup on success
    } catch (error: any) {
      console.error(error); // Optionally handle the error
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false); // Hide popup
  };

  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className="py-10 lg:py-20"
    >
      <div
        className={`border border-white/15 max-w-[1152px] rounded-2xl p-8 mx-4 xl:mx-auto transition-all ease-in-out duration-300`}
      >
        <div className="space-y-3 mb-8">
          <h1 className="font-bold text-3xl text-white">Contact</h1>
          <div className="bg-[#41A2EB] w-[54px] h-2 rounded-md"></div>
        </div>
        <form onSubmit={OnSubmit}>
          <div className="text-white space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                onChange={(e) => {
                  setInfo({ ...info, fname: e.target.value });
                }}
                type="text"
                className="w-full py-2 placeholder:px-4 px-4 placeholder:text-[#ACACAC] rounded-md border-white/10 bg-transparent border"
                placeholder="Full Name"
                value={info.fname}
                required
                disabled={isPending}
              />
              <input
                onChange={(e) => {
                  setInfo({ ...info, email: e.target.value });
                }}
                type="email"
                className="w-full py-2 placeholder:px-4 px-4 placeholder:text-[#ACACAC] rounded-md border-white/10 bg-transparent border"
                placeholder="Email Address"
                value={info.email}
                required
                disabled={isPending}
              />
            </div>

            <textarea
              className="w-full py-2 placeaholder:px-4 px-4 placeholder:text-[#ACACAC] rounded-md border-white/10 bg-transparent border"
              placeholder="Message"
              rows={5}
              onChange={(e) => {
                setInfo({ ...info, message: e.target.value });
              }}
              disabled={isPending}
              value={info.message}
              required
            ></textarea>

            <div className="flex justify-end">
              <button type="submit" disabled={isPending}>
                <span className="flex justify-items-end items-center gap-2 text-[#3478F6] bg-[#1D1D21] border py-2 px-4 rounded-lg border-white/10">
                  <BsFillSendFill className="flex" />{" "}
                  {isPending ? "Sending... " : "Send Message"}
                </span>
              </button>
            </div>
          </div>
        </form>

        {/* Popup Component */}
        {popupVisible && (
          <div className="fixed inset-0 flex items-center justify-center ">
            <div className="bg-[#1D1D21]  p-4  rounded-lg text-center border border-white/10">
              <p className="text-[#3478F6] py-4">
                Your message has been sent successfully!
              </p>
              <button
                className="mt-2 px-4 py-2 border border-white/10 text-white rounded-lg "
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

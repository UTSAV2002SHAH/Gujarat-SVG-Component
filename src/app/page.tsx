"use client";

// CSS import

// Custom Components Import
import DropdownMenu from "../components/DropdownMenu";
import GujaratMap from "@/components/Map/GujaratMap";

// Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {
  faCode,
  faCoins,
  faBook,
  faQuestion,
  faLightbulb,
  faRobot,
  faBrain,
  faFutbolBall,
  fa7,
  faBoltLightning,
  faOm,
  faIndianRupee,
  faLeaf,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

// import Image from "next/image";
import { useState } from "react";

const productData = [
  {
    icon: faCode,
    item: "Open source",
    description: "Write better code with AI",
  },
  {
    icon: faCoins,
    item: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: faBook,
    item: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: faCode,
    item: "Open source",
    description: "Write better code with AI",
  },
  {
    icon: faCoins,
    item: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: faBook,
    item: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: faCode,
    item: "Open source",
    description: "Write better code with AI",
  },
];

const communityData = [
  {
    icon: faQuestion,
    item: "TheQuestion",
    description: "Ask the most UnderRated Questions",
  },
  {
    icon: faLightbulb,
    item: "1001 IDEAS",
    description: "1001 Ideas to change INDIA",
  },
  {
    icon: faRobot,
    item: "Artificial Intelligence",
    description: "AI Communities",
  },
  {
    icon: faBrain,
    item: "Maths",
    description: "Mathematics Communities",
  },
  {
    icon: faFutbolBall,
    item: "Football",
    description: "Football Communities",
  },
  {
    icon: fa7,
    item: "Cricket",
    description: "Cricket Communities",
  },
];

const messionsData = [
  {
    icon: faLightbulb,
    item: "1001 IDEAS",
    description: "Implementiong 1001 IDEAS that change INDIA",
  },
  {
    icon: faBoltLightning,
    item: "Innovation",
    description: "Empowering innovating Brains",
  },
  {
    icon: faFutbolBall,
    item: "Every-Day Football",
    description: "Empowering Culture",
  },
  {
    icon: faOm,
    item: "Sanskruti",
    description: "Highlighting Indian Culture",
  },
];

const discussionData = [
  {
    icon: faLightbulb,
    item: "GeoPolitics",
    description: "Implementiong 1001 IDEAS that change INDIA",
  },
  {
    icon: faIndianRupee,
    item: "Finance",
    description: "Empowering innovating Brains",
  },
  {
    icon: faLeaf,
    item: "Nature",
    description: "Empowering Culture",
  },
  {
    icon: faShieldHalved,
    item: "Defence",
    description: "Highlighting Indian Culture",
  },
];
// 1f1f5f main bg color
export default function Home() {
  const [isProductHovering, setProductHovering] = useState(false);
  const [isMissionsHovering, setMissionsHovering] = useState(false);
  const [isDiscussionHovering, setDiscussionHovering] = useState(false);
  const [isCommunityHovering, setCommunityHovering] = useState(false);


  return (
    <div className=" main min-w-screen min-h-screen p-0 flex flex-col bg-[#1f1f5f]">
      <div className="min-w-screen sticky top-0 min-h-10 bg-gray-700 z-10">
        1
      </div>

      <header className=" flex flex-col sticky top-[40px] min-w-screen min-h-[4.5rem] py-4 bg-[#1f1f5f] text-4 items-center z-10  ">
        <div className="flex flex-row px-8 min-w-screen">
          <div className="logo max-w-[40px] max-h-[40px] mr-2">
            <img className="" src="favicon.ico" alt="" />
          </div>

          <div className="HeaderMenu flex flex-row flex-grow">
            <nav className="flex flex-row items-center">
              <div
                className="min-h-[50px]"
                onMouseEnter={() => setProductHovering(true)}
                onMouseLeave={() => setProductHovering(false)}
              >
                <button className=" flex flex-row min-w-25 max-h-[40px] p-2 items-center cursor-pointer">
                  <span className="mr-1  hover:text-gray-300 hover:text-[15px]">
                    Product
                  </span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
                {isProductHovering && (
                  <DropdownMenu title="Product" items={productData} />
                )}
              </div>

              <div
                className="min-h-[50px]"
                onMouseEnter={() => setMissionsHovering(true)}
                onMouseLeave={() => setMissionsHovering(false)}
              >
                <button className=" flex flex-row min-w-25 max-h-[40px] p-2 items-center cursor-pointer">
                  <span className="mr-1  hover:text-gray-300 hover:text-[15px]">
                    Missions
                  </span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
                {isMissionsHovering && (
                  <DropdownMenu title="Missions" items={messionsData} />
                )}
              </div>

              <div
                className="min-h-[50px]"
                onMouseEnter={() => setDiscussionHovering(true)}
                onMouseLeave={() => setDiscussionHovering(false)}
              >
                <button className=" flex flex-row min-w-25 max-h-[40px] p-2 items-center cursor-pointer">
                  <span className="mr-1  hover:text-gray-300 hover:text-[15px]">
                    Discussion
                  </span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
                {isDiscussionHovering && (
                  <DropdownMenu title="Discussion" items={discussionData} />
                )}
              </div>

              <div
                className="min-h-[50px]"
                onMouseEnter={() => setCommunityHovering(true)}
                onMouseLeave={() => setCommunityHovering(false)}
              >
                <button className=" flex flex-row min-w-25 max-h-[40px] p-2 items-center cursor-pointer">
                  <span className="mr-1  hover:text-gray-300 hover:text-[15px]">
                    Community
                  </span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
                {isCommunityHovering && (
                  <DropdownMenu title="Community" items={communityData} />
                )}
              </div>
              <div className="min-h-[50px]">
                <button className=" flex flex-row min-w-25 max-h-[40px] p-2 items-center cursor-pointer">
                  <span className="mr-1  hover:text-gray-300 hover:text-[15px]">
                    About
                  </span>
                </button>
              </div>
            </nav>

            <div className=" flex flex-grow items-center justify-end">
              <div className="SearchDiv flex w[100px] h-[30px] items-center cursor-pointer">
                <button className="flex w-[350px] h-full mr-[12px] px-2 bg-[#282c4c] rounded-lg border-[1px] border-gray-400 cursor-pointer items-center">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="mx-2 text-gray-300"
                  />
                  <span className="text-[16px] min-h-[22px] text-gray-300">
                    Explore
                  </span>
                </button>

                <div className="w-[80px] h-8 items-center px-[12px] py-[4px] rounded-lg hover:text-gray-300 cursor-pointer">
                  <a href="/login" className="items-center rounded-lg mb-1">
                    Sing in
                  </a>
                </div>

                <div className="w-[78px] h-8 items-center px-[10px] py-[2px]  hover:text-gray-300  hover:border-gray-300 cursor-pointer rounded-lg border-1 border-white">
                  <a href="/signup">Sing up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="BannerDiv min-h-150 bg-[#1f1f5f] sticky top-[98px]">
        <div className=" flex flex-col w-full h-auto px-[24px] items-center  bg-transparent ">
          {/*border-1 border-white*/}
          <div className="mt-20 mb-20  flex flex-col items-center">
            <span className="w-auto">
              <h1 className="text-6xl font-extrabold font-serif items-center">
                Build your Interest on a
              </h1>
            </span>
            <span className="w-auto">
              <h1 className=" text-6xl font-extrabold font-serif items-center">
                collaborative platform
              </h1>
            </span>
            <div className="flex w-auto h-[56px] bg-white p-2 mt-8 items-center rounded-[8px]">
              <input
                type="text"
                className="h-[46px] mr-2 font-sans text-gray-800 focus:outline-none focus:border-gray-300 placeholder-gray-800"
                placeholder="Enter your email"
              />
              <button className="w-[180px] h-[46px] p-1 font-bold rounded-[8px] cursor-pointer  bg-[#47b8d6] hover:bg-[#2979ff] transition-colors duration-500">
                <a href="/signup">Sing up for Mirror</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="min-w-screen bg-white z-8">
        {/* bg-[url('https://www.gujarattourism.com/content/dam/gujrattourism/images/destinations/junagadh/attractions/girnar-hill/GIrnar-Header.jpg')] bg-cover bg-center */}
        {/* <div className="TopicsList flex w-auto items-center justify-center">
          <div className="flex w-screen h-[500px] text-black bg-[#1f1f5f] border-2 border-black items-center justify-center">
            <span>Hello World</span>
          </div>
        </div> */}

        <div className="GujMapDiv min-w-screen flex flex-col justify-items-center items-center">

          {/* <div className="flex w-430 h-140 ml-10 justify-evenly items-center bg-white rounded-2xl">
            <div className="flex w-auto h-auto items-center justify-center text-black">Hello</div>
          </div> */}

          <GujaratMap />
          {/* <FeatureBox images={milkyWay} descriptions={[]} />
          <FeatureBox images={[]} descriptions={[]} />
          <FeatureBox images={[]} descriptions={[]} /> */}

          {/* <div className='flex w-full h-[900px] justify-center items-start'>
            <div className='flex flex-col w-auto h-auto p-2 gap-2 '> 
              <div className='flex w-352 h-100 mt-8 rounded-lg bg-purple-500  text-black justify-center items-center'>Upper box</div>
              <div className='flex gap-2'>
                <div className='flex w-200 h-80 rounded-lg bg-purple-500 text-black justify-center items-center'>Lower Left Block</div> 
                <div className='flex w-150 h-80 rounded-lg bg-purple-500 text-black justify-center items-center'>Lower right Block</div>
              </div>
            </div>
          </div> */}

          {/* <div className='flex w-auto h-[900px] mt-2 justify-center items-start '>
            <div className='flex flex-col w-auto h-auto p-2 gap-2 '>
              <div className='flex w-352 h-100 mt-8 rounded-lg bg-white  text-black justify-center items-center'>Upper block</div>
              <div className='flex gap-2'>
                <div className='flex w-200 h-80 rounded-lg bg-white text-black justify-center items-center'>Lower Left Block</div>
                <div className='flex w-150 h-80 rounded-lg bg-white text-black justify-center items-center'>Lower right Block</div>
              </div>
            </div>
          </div>

          <div className='flex w-auto h-[900px] mt-2 justify-center items-start '>
            <div className='flex flex-col w-auto h-auto p-2 gap-2 '> 
              <div className='flex w-352 h-100 mt-8 rounded-lg bg-white  text-black justify-center items-center'>Upper block</div>
              <div className='flex gap-2'>
                <div className='flex w-200 h-80 rounded-lg bg-white text-black justify-center items-center'>Lower Left Block</div>
                <div className='flex w-150 h-80 rounded-lg bg-white text-black justify-center items-center'>Lower right Block</div>
              </div>
            </div>
          </div> */}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/Metric_Logo.webp";
import SimulationIcon from "../../assets/simulation.svg";
import UserIcon from "../../assets/User-avatar.svg";
import LogoutIcon from "../../assets/7124045_logout_icon.svg";
import MonitoringIcon from "../../assets/dashboard-monitoring-icon.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const SlideBar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [burgurMenu, setBurgurMenu] = useState(false);
  const [state, setState] = useState("User");

  const handleHover = (condition: boolean): void => {
    if (window.innerWidth >= 768) {
      setIsHovered(condition);
    } else {
      setIsHovered(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsHovered(false);
      } else {
        setIsHovered(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* {burgur menu} */}
      <motion.div
        onClick={() => setBurgurMenu(!burgurMenu)}
        className="max-2xl:hidden max-md:fixed left-3 top-3 max-md:flex max-md:justify-center max-md:items-center max-md:flex-col gap-1.5 cursor-pointer hover:shadow-[0_0_8px_rgba(0,255,0,0.2)] hover:scale-105 transition-all duration-150"
      >
        <motion.div
          className="w-6 h-[1px] bg-green-700"
          animate={burgurMenu ? { rotate: 45, y: 5 } : {}}
          transition={{ duration: 0.1 }}
        ></motion.div>
        <motion.div
          className="w-6 h-[1px] bg-green-700"
          animate={burgurMenu ? { opacity: 0 } : {}}
          transition={{ duration: 0.1 }}
        ></motion.div>
        <motion.div
          className="w-6 h-[1px] bg-green-700"
          animate={burgurMenu ? { rotate: -45, y: -5 } : {}}
          transition={{ duration: 0.1 }}
        ></motion.div>
      </motion.div>

      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 h-[98vh] flex flex-col items-center justify-between overflow-hidden
      bg-[#121212] w-16 max-2xl:hover:w-48 max-xld:hover:w-40 max-lgd:hover:w-36 pt-6 pb-6 pr-2 pl-2 rounded-br-2xl rounded-tr-2xl transition-all duration-500 ease-in-out 
      max-md:-left-48 max-md:w-44 max-md:hover:w-44 z-10
      ${isHovered ? "bg-[#1a1a1a] shadow-[0_0_10px_rgba(0,255,0,0.2)]" : ""}
      ${burgurMenu ? "max-md:left-0" : ""}`}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <motion.div
          onClick={() => setBurgurMenu(!burgurMenu)}
          animate={!burgurMenu ? { rotate: 90, opacity: 0 } : {}}
          transition={{ duration: 0.1 }}
          className="max-2xl:hidden absolute right-3 top-1 cursor-pointer text-green-50 max-md:flex text-[18px]"
        >
          X
        </motion.div>

        {/* top section */}
        <div className="flex flex-col items-start gap-4">
          {/* logo */}
          <div className="flex justify-start items-center gap-2">
            <Image
              src={Logo}
              alt="Logo"
              className={`w-8 h-8 ${isHovered ? "w-14 h-14" : ""}`}
            />
          </div>
        </div>

        {/* Middle section */}
        <div className="flex flex-col items-start gap-4 w-full">
          {[
            { icon: UserIcon, label: "User" },
            { icon: SimulationIcon, label: "Simulation" },
            { icon: MonitoringIcon, label: "Monitoring" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 w-full p-2 rounded-lg transition-all duration-300 cursor-pointer 
  hover:border-t hover:border-b hover:border-green-500 hover:shadow-[0_0_8px_rgba(0,255,0,0.2)] hover:bg-[#1e1e1e]
  ${
    state === item.label
      ? "border border-[#6aff95] bg-[#1a1a1a] shadow-[0_0_6px_rgba(106,255,149,0.2)]"
      : "hover:border-t hover:border-b hover:border-green-500 hover:shadow-[0_0_8px_rgba(0,255,0,0.2)] hover:bg-[#1e1e1e]"
  }`}
              onClick={() => setState(item.label)}
            >
              <Image className="w-7 h-7" src={item.icon} alt={item.label} />
              {isHovered && <p className="text-white">{item.label}</p>}
            </div>
          ))}
        </div>

        {/* bottom section */}
        <div className="flex flex-col items-start w-full">
          <div
            className="flex items-center gap-3 w-full p-2 rounded-lg transition-all duration-300 cursor-pointer 
          hover:border-t hover:border-b hover:border-green-500 hover:shadow-[0_0_8px_rgba(0,255,0,0.2)] hover:bg-[#1e1e1e]"
          >
            <Image className="w-7 h-7" src={LogoutIcon} alt="Logout" />
            {isHovered && <p className="text-white">Logout</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideBar;

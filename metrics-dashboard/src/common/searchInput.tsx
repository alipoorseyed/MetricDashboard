"use client"
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "../assets/search-521.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";


const months = [
  "jan",
  "feb",
  "mar",
  "apr"
]

interface InputProps {
  className?: string;
  classNameInput?: string;
}

const Input: React.FC<InputProps> = ({ className, classNameInput }) => {


  const router = useRouter(); 
  const searchParams = useSearchParams();
  const [items , setItems] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);


  useEffect(() => {
    setItems(months);
  },[])


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = items.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleInputClick = () => {
    if (query.trim() === "") {
      setFilteredItems(items);
    }
    setShowDropdown(true);
  };

  const handleItemClick = (item: string) => {
    console.log("messi");
    setQuery(item);
    setShowDropdown(false);
    const params = new URLSearchParams(searchParams.toString());
    params.set("month", item.toLowerCase());
    console.log("messi");
    
    router.push(`?${params.toString()}`);
  };






  return (
    <div
      className={`relative active:scale-95 transition-all duration-200 flex justify-center items-center ${className}`}
    >
      <input
        value={query}
        onChange={handleInputChange}
        onClick={handleInputClick}
        type="text"
        placeholder="Search for ..."
        className={`borderborder-gray-700 bg-black text-zinc-300 rounded-3xl text-[15px] focus:outline-none
      hover:border-green-800 hover:shadow-lg hover:shadow-green-500/50 
       transition-all duration-200 placeholder-gray-500 placeholder:text-[14px] w-full ${classNameInput}`}
      />
      {showDropdown && (
        <ul className="absolute z-10 w-full top-full bg-[#2A2A2A] border border-green-700 mt-2 rounded-xl shadow-[0_0_10px_rgba(0,255,0,0.2)] max-h-44 overflow-y-scroll overflow-x-hidden scrollbar-hide transition-all duration-300">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                onMouseDown={() => handleItemClick(item)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`px-4 py-2 text-white transition-all duration-200 ease-in-out cursor-pointer rounded-md ${ hovered!==null ?
                  hovered === index
                    ? "bg-green-500 text-black scale-[1.03]"
                    : "hover:bg-green-800 opacity-40"
                    :null
                }`}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-400">No items found ...</li>
          )}
        </ul>
      )}
      <Image
        src={SearchIcon}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6"
        alt="search"
      />
    </div>
  );
};

export default Input;

"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      alert(`Ищем: ${query}`);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-300 bg-white">
      <div className="flex items-center space-x-10 ml-4">
        <img src="/icons/logo.png" alt="Logo" className="w-20 h-20" />
      </div>

      <div className="relative w-1/4 hidden md:block">
        <input
          type="text"
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-full p-2 pr-10 border border-gray-400 rounded-lg bg-white shadow-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="absolute right-3 top-2 text-gray-600 hover:text-black"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Адаптивные кнопки для мобильных устройств */}
      <div className="flex items-center space-x-4 mr-10 md:space-x-6">
        <button className="hover:opacity-80">
          <Image src="/globe.png" alt="Сменить язык" width={32} height={32} />
        </button>
        <button className="hover:opacity-80">
          <Image
            src="/user.png"
            alt="Профиль"
            width={32}
            height={32}
            className="rounded-full"
          />
        </button>
      </div>

      {/* Мобильный поиск */}
      <div className="relative md:hidden w-full">
        <input
          type="text"
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-full p-2 pr-10 border border-gray-400 rounded-lg bg-white shadow-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="absolute right-3 top-2 text-gray-600 hover:text-black"
        >
          <Search size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;


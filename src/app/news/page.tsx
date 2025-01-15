"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SearchNormal1 } from "iconsax-react";
import FullNewsList from "@/components/FullNewsList";
import { useState } from "react";

const News = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Header />
      <div
        className="herosec w-full h-[500px] lg:h-[460px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/projects/thailand-7300384.jpg')" }}
      >
        <div className="bg-gradient-to-b from-black to-transparent lg:bg-gradient-to-r lg:from-black lg:to-transparent backdrop-blur-[5px] h-full w-full flex flex-col justify-center items-start">
          <div className="flex flex-col items-start justify-center gap-3 h-full w-full max-w-[1140px] 2xl:max-w-[1440px] mx-auto max-md:px-5 px-6">
            <h1 className="leading-none">News</h1>
            <span className="lg:max-w-[440px] leading-relaxed">
              The latest trends and insights from the world of interior design.
            </span>
          </div>
        </div>
      </div>
      <div className="contentWrapper max-w-[1140px] 2xl:max-w-[1440px] mx-auto flex flex-col max-md:px-4 px-6 pt-10 pb-24 gap-6">
        <div className="flex flex-col gap-4 mb-4">
          <h2 className="leading-none">Find it faster</h2>
          <div className="searchbar max-w-[560px] flex items-center gap-0 hover:gap-3 focus-within:gap-3 transition-all duration-300">
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 h-10 md:h-[45px] px-5 md:px-6 bg-[#1a1a1a] outline-none text-white/80 placeholder-white/20 rounded-full border border-white/10 focus:border-white/20 transition-colors duration-200 text-sm md:text-base"
            />
            <button
              className="bg-[#1a1a1a] h-10 md:h-[45px] aspect-square rounded-full flex justify-center items-center ml-[-8px] border border-white/10 hover:bg-[#222] transition-colors duration-200"
              aria-label="Search"
            >
              <SearchNormal1 size={16} color="rgba(255,255,255,0.35)" />
            </button>
          </div>
        </div>

        <FullNewsList query={query} />
      </div>
      <Footer />
    </div>
  );
};

export default News;

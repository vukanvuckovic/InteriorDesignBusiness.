"use client";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Image from "next/image";
import { portfolioProjects } from "@/constants/db";
import { useState } from "react";
import { GhostArrowButton } from "@/components/ui/Button";

const navBtnCls =
  "h-8 md:h-10 aspect-square rounded-full flex justify-center items-center bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-[8px] hover:from-white/25 hover:to-white/15 transition-all duration-200 flex-shrink-0";

const CaseStudySlider = () => {
  const [index, setIndex] = useState(0);
  const total = portfolioProjects.length;

  const prev = () => setIndex(index === 0 ? total - 1 : index - 1);
  const next = () => setIndex(index === total - 1 ? 0 : index + 1);

  return (
    <div className="caseStudySection w-full flex flex-col items-center">
      <div className="relative w-full h-[300px] md:h-[400px] 2xl:h-[500px] rounded-br-[40px] overflow-hidden border-t border-white/20 xl:border-none shadow-lg">
        <Image
          src={portfolioProjects[index].projectImage}
          alt={portfolioProjects[index].projectName}
          className="object-cover fade-in"
          key={index}
          fill
        />
      </div>
      <div className="flex flex-col items-center px-4 py-6 gap-5 max-w-[800px] w-full">
        <div className="flex justify-between items-center w-full gap-4">
          <button onClick={prev} className={navBtnCls} aria-label="Previous project">
            <ArrowLeft size={18} color="white" />
          </button>
          <p
            key={index}
            className="fade-in text-[22px] md:text-[28px] font-medium leading-none text-center"
          >
            {portfolioProjects[index].projectName}
          </p>
          <button onClick={next} className={navBtnCls} aria-label="Next project">
            <ArrowRight size={18} color="white" />
          </button>
        </div>
        <span
          key={`desc-${index}`}
          className="fade-in text-center leading-relaxed"
        >
          {portfolioProjects[index].projectDescription}
        </span>
        <GhostArrowButton href={portfolioProjects[index].projectLink}>
          Case Study
        </GhostArrowButton>
      </div>
    </div>
  );
};

export default CaseStudySlider;

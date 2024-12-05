"use client";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import SkeletonLoader from "./SkeletonLoader";

const SLIDE_COUNT = 3;

const navBtnCls =
  "h-8 md:h-10 aspect-square rounded-full bg-white/20 hover:bg-white/30 flex justify-center items-center transition-colors duration-200 flex-shrink-0";

const Slider = ({ image }: { image?: string }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="imageSlider flex h-[250px] md:h-[500px] 2xl:h-[600px] w-full items-center gap-2 md:gap-4">
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          className={navBtnCls}
          aria-label="Previous image"
        >
          <ArrowLeft size={18} color="white" />
        </button>
        <div className="flex-1 flex h-full overflow-hidden rounded-lg shadow-lg border border-white/10">
          <div
            style={{ transform: `translateX(calc(-100% * ${index}))` }}
            className="flex flex-1 h-full transition-transform duration-500 ease-out"
          >
            {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 relative w-full h-full bg-[#111]"
              >
                {image && (
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-contain select-none"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIndex((i) => Math.min(i + 1, SLIDE_COUNT - 1))}
          className={navBtnCls}
          aria-label="Next image"
        >
          <ArrowRight size={18} color="white" />
        </button>
      </div>
      {!image && <SkeletonLoader height="500px" width="100%" radius={8} />}
      <div className="flex gap-2 items-center">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white/70 w-4 h-2"
                : "bg-white/20 w-2 h-2 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

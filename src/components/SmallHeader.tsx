"use client";
import { LinksMap } from "@/constants/linksMap";
import { HambergerMenu } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const SmallHeader = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="slide-up flex max-md:justify-between md:justify-center xl:justify-start sticky bottom-0 max-md:px-4 max-md:py-3 px-6 py-4 border-t border-white/15 bg-black/40 backdrop-blur-[30px]">
        <ul className="hidden md:flex gap-6 text-base font-medium">
          {LinksMap.map((item) => (
            <Link href={item.url} key={item.id}>
              <li
                className={`hover:-translate-y-px transition-all duration-200 ${
                  pathname === item.url
                    ? "text-accent"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <Link href="/" className="md:hidden text-xl font-bold text-white tracking-wider">
          IDB.
        </Link>
        <button
          className="md:hidden w-8 aspect-square rounded-lg bg-gradient-to-b from-white/20 to-white/10 flex justify-center items-center"
          onClick={() => setShow(!show)}
          aria-label="Open menu"
        >
          <HambergerMenu size={18} color="white" />
        </button>
      </header>
      <MobileMenu show={show} setShow={setShow} />
    </>
  );
};

export default SmallHeader;

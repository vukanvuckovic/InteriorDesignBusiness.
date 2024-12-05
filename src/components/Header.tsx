"use client";

import { LinksMap } from "@/constants/linksMap";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { HambergerMenu } from "iconsax-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="flex justify-center items-center bg-black/40 border-b border-white/15 backdrop-blur-[10px] sticky top-0 z-10">
        <div className="flex items-center justify-between w-full max-w-[1140px] 2xl:max-w-[1440px] max-md:px-4 max-md:py-3 px-6 py-5">
          <Link href="/" className="text-xl font-bold text-white tracking-wider">
            IDB.
          </Link>
          <ul className="fade-in-slow flex-1 hidden md:flex items-center justify-end gap-8 text-base font-medium">
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
          <button
            className="md:hidden w-8 aspect-square rounded-lg bg-gradient-to-b from-white/20 to-white/10 flex justify-center items-center"
            onClick={() => setShow(!show)}
            aria-label="Open menu"
          >
            <HambergerMenu size={18} color="white" />
          </button>
        </div>
      </header>
      <MobileMenu show={show} setShow={setShow} />
    </>
  );
};

export default Header;

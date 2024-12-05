"use client";
import { LinksMap } from "@/constants/linksMap";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
}) => {
  const pathname = usePathname();

  return (
    <div
      className="fixed top-0 left-0 h-[100dvh] w-[100dvw] flex transition-transform duration-500 ease-in-out z-50"
      style={{ transform: show ? "translateX(0)" : "translateX(-100%)" }}
    >
      <div className="flex flex-col min-w-[300px] h-full p-6 gap-8 bg-black/60 backdrop-blur-[50px] border-r border-white/10">
        <div className="flex justify-between items-center">
          <h2 className="!text-xl font-bold">IDB.</h2>
          <button
            onClick={() => setShow(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
          >
            <ArrowLeft2 size={18} color="white" />
          </button>
        </div>
        <ul className="flex flex-col gap-2">
          {LinksMap.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => setShow(false)}
            >
              <li
                className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                  pathname === item.url
                    ? "text-accent bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setShow(false)}
        className="h-full flex-1 cursor-default"
      />
    </div>
  );
};

export default MobileMenu;

import { LinksMap } from "@/constants/linksMap";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-[#0a0a0a] border-t border-white/10 max-md:px-5 max-md:py-8 px-6 py-12">
      <div className="max-w-[1140px] 2xl:max-w-[1440px] w-full flex flex-col gap-10 md:flex-row md:gap-16">
        <div className="flex-1 flex flex-col gap-3 max-w-[400px]">
          <span className="text-white text-xl font-semibold !text-white/90 !text-xl">
            Interior Design Business.
          </span>
          <span className="!text-sm leading-relaxed">
            Creating bespoke interiors that blend style and functionality — from
            concept to completion.
          </span>
        </div>
        <div className="flex gap-12 md:gap-16">
          <div className="flex flex-col gap-3">
            <span className="!text-white/40 !text-xs uppercase tracking-widest font-medium">
              Navigation
            </span>
            <ul className="flex flex-col gap-2">
              {LinksMap.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:self-end">
          <span className="!text-white/30 !text-[10px]">
            © 2025 Interior Design Business. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

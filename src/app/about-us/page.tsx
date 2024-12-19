import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { GhostArrowButton } from "@/components/ui/Button";

type LinkCardProps = {
  title: string;
  desc: string;
  img: string;
  link: string;
};

const LinkCard = ({ title, desc, img, link }: LinkCardProps) => (
  <Link
    href={link}
    style={{ backgroundImage: `url(${img})` }}
    className="group lg:flex-1 flex items-end shadow-lg h-[200px] lg:h-[300px] rounded-xl overflow-hidden bg-cover bg-center"
  >
    <div className="flex-1 flex flex-col items-start leading-none gap-1 py-4 group-hover:py-5 transition-all duration-300 max-md:px-4 px-5 bg-black/30 backdrop-blur-[40px]">
      <h3 className="!text-white font-semibold">{title}</h3>
      <span>{desc}</span>
    </div>
  </Link>
);

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div
        className="herosec h-[550px] lg:h-[480px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/projects/interior-2685521.jpg')" }}
      >
        <div className="bg-gradient-to-b from-black to-transparent lg:bg-gradient-to-r lg:from-black lg:to-transparent backdrop-blur-[5px] h-full w-full flex flex-col justify-center items-start">
          <div className="flex flex-col lg:flex-row items-center h-full w-full max-w-[1140px] 2xl:max-w-[1440px] mx-auto max-md:px-5 px-6">
            <div className="flex-1 flex flex-col justify-center gap-3">
              <h1 className="leading-none">About Us</h1>
              <span className="max-w-[420px] leading-relaxed">
                A team of passionate architects and designers, committed to
                creating innovative spaces that improve quality of life.
              </span>
            </div>
            <div className="flex-1 w-full flex h-full justify-center items-end">
              <div className="group w-full h-[280px] lg:w-[420px] lg:h-[420px] rounded-t-[20px] overflow-hidden bg-gradient-to-b from-accent to-[#EEAB74] shadow-2xl">
                <div className="h-full w-full relative mt-[70px] xl:group-hover:mt-[50px] transition-all duration-700">
                  <Image
                    src="/iphone.png"
                    alt="Mobile app preview"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contentWrapper flex flex-col max-md:px-4 px-6 max-md:py-16 py-24 max-md:gap-12 gap-24 w-full max-w-[700px] lg:max-w-[1140px] 2xl:max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-4">
          <h2>Our Vision</h2>
          <span className="leading-relaxed">
            Our vision is to shape the future of architecture through a
            commitment to sustainable, innovative, and thoughtful design. We
            strive to make a positive impact on communities by crafting spaces
            that inspire and uplift the people who live and work in them.
          </span>
          <span className="leading-relaxed">
            We believe architecture is an art form that connects people with
            their environment. Our designs are rooted in sustainability, ensuring
            every project contributes to a healthier planet.
          </span>
          <span className="leading-relaxed">
            With a deep respect for the past and an eye on the future, we are
            building the world we want to live in — one project at a time.
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Humble Beginnings</h2>
          <span className="leading-relaxed">
            Our journey began over 10 years ago with a simple idea: to create
            beautiful, functional spaces that enhance lives. From modest
            beginnings, we have grown into a respected architecture firm known
            for creativity and attention to detail.
          </span>
          <span className="leading-relaxed">
            Each project we take on reflects our growth as a team and as
            individuals. We are proud of the work we have done — but even more
            excited for what the future holds.
          </span>
          <div className="flex flex-col items-center gap-2 my-8">
            <div className="w-full h-[220px] rounded-xl overflow-hidden relative border border-white/20">
              <Image
                src="/oldPics/oldPic2.jpeg"
                alt="Company anniversary — 20 November 1974"
                fill
                className="object-cover"
              />
            </div>
            <span className="!text-white/40">
              10 Years of the Company — 20 November 1974
            </span>
          </div>
          <span className="leading-relaxed">
            Over the past decade, we have remained true to our founding
            principles: delivering high-quality, impactful designs while
            maintaining a deep connection to our community.
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Our Most Advanced Project Yet</h2>
          <span className="leading-relaxed">
            We are proud to unveil our most ambitious project to date: a
            sustainable, energy-efficient development that sets a new standard
            for modern living. This project combines cutting-edge technology,
            innovative design, and eco-friendly solutions.
          </span>
          <div className="flex flex-col lg:flex-row items-center gap-6 mt-4">
            <div className="flex-1 flex flex-col gap-5">
              <h2 className="leading-none">Staircase</h2>
              <span className="leading-relaxed">
                One of the highlights of our most advanced project is the grand
                staircase — designed to be both a visual masterpiece and a
                functional centerpiece. With unique design and sustainable
                materials, it exemplifies our commitment to innovation.
              </span>
              <GhostArrowButton href="/portfolio/staircase">
                Full Case Study
              </GhostArrowButton>
            </div>
            <div className="h-[280px] w-full lg:w-[300px] rounded-xl overflow-hidden relative flex-shrink-0 shadow-lg">
              <Image
                src="/projects/architecture-1850092.jpg"
                alt="Staircase project"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2>Word from the CEO</h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full aspect-square lg:w-[240px] lg:h-full lg:min-h-[240px] lg:max-h-[320px] flex-shrink-0 rounded-xl overflow-hidden relative">
              <Image
                src="/profilePics/profilePic2.jpeg"
                alt="CEO Mark Johnson"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col lg:px-4 py-2 gap-3">
              <div className="flex flex-col leading-none gap-1">
                <h3>Mark Johnson</h3>
                <span className="!text-accent !text-sm">Founder &amp; CEO</span>
              </div>
              <span className="leading-relaxed !text-lg italic !text-white/80">
                &ldquo;At our company, we are driven by a passion for creating
                meaningful, lasting designs that make a difference. Our journey
                is just beginning, and I am excited for what lies ahead.&rdquo;
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col leading-none gap-2">
            <h2>Where To Now?</h2>
            <span>Experience everything we have to offer.</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <LinkCard
              title="Portfolio"
              desc="All of our projects"
              img="/projects/architecture-1850092.jpg"
              link="/portfolio"
            />
            <LinkCard
              title="Order a Project"
              desc="Get a piece of art in your own home"
              img="/projects/pexels-pixabay-275484.jpg"
              link="/contact"
            />
            <LinkCard
              title="Contact Us"
              desc="Get help with your decision"
              img="/projects/pexels-valeriya-827528.jpg"
              link="/contact"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

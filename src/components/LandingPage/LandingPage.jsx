import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import "./LandingPage.css";

const roles = [
  "HTML",
  "CSS",
  "Javascript",
  "Bootstrap",
  "ReactJS",
  "Tailwind CSS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Restful APIs",
];

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="main-first h-screen w-screen">
        <div className="row-1 lg:flex h-[85%] w-full bg-[#fce7f3] flex justify-center items-center gap-36">
          <img
            src="https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg"
            alt=""
            className="rounded-full w-40 h-40 lg:w-60 lg:h-60"
          />
          <div className="flex flex-col gap-2">
            <span className="text-[#f472b6] font-bold text-2xl">
              Hi, I'm Gaurav
            </span>
            <div className="flex flex-col gap-4">
              <div className="flex gap-6">
                <span className="font-bold lg:text-7xl">Designer</span>
                <span className="font-bold lg:text-7xl text-[#f472b6]">&</span>
              </div>{" "}
              <span className="font-bold lg:text-7xl">Developer</span>
            </div>
            <span className="lg:mt-4 text-2xl">
              I love creating sleek user interfaces & bring them to life with
              code.
            </span>
          </div>
        </div>

        <div className="row-2 h-[15%] text-2xl bg-gray-800 text-white overflow-hidden flex items-center">
          <div className="animate-marquee">{roles.join(" | ")}</div>
        </div>
      </div>

      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

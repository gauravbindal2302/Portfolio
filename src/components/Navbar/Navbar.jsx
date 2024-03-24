export default function Navbar() {
  return (
    <>
      <div className="navbar flex w-screen bg-white lg:py-6 lg:px-16 justify-between items-center fixed">
        <div className="logo">
          <span className="font-pacifico text-[#f472b6] font-bold text-3xl">
            <a href="/">Gaurav Bindal</a>
          </span>
        </div>
        <ul className="nav-items flex lg:gap-8 font-pacifico">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

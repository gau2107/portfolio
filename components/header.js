import Image from "next/image";

function Header() {
  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div
        className="mb-2 sm:mb-0 flex flex-row
  "
      >
        <div className="h-10 w-10 self-center mr-2">
          <img
            alt="profile.png"
            className="h-10 w-10 self-center"
            src="/assets/profile.png"
          />
        </div>
        {/* <div> */}
        {/* <a
            href="/home"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-bold"
          >
            LogoText
          </a>
          <br></br>
          <span className="text-xs text-grey-dark">Beautiful New Tagline</span> */}
        {/* </div> */}
      </div>

      <div className="sm:mb-0 self-center">
      <a
          target="_blank"
          rel="noreferrer"
          href="https://1drv.ms/w/s!AsTFw1EO-3YLmw2zadio5gH47CI0?e=wuZC9X"
          className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-grey-darkest hover:text-blue-dark font-semibold text-base"
        >
          Projects
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://1drv.ms/w/s!AsTFw1EO-3YLmw2zadio5gH47CI0?e=wuZC9X"
          className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-grey-darkest hover:text-blue-dark font-semibold text-base"
        >
          Blog
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://1drv.ms/w/s!AsTFw1EO-3YLmw2zadio5gH47CI0?e=wuZC9X"
          className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-grey-darkest hover:text-blue-dark font-semibold text-base"
        >
          Resume
        </a>
      </div>
      
    </nav>
  );
}

export default Header;

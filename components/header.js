import data from "../public/assets/HeaderData.json";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div
        className="mb-2 sm:mb-0 flex flex-row
  "
      >
        <div className="h-10 w-10 self-center mr-2">
          <Link href={"/"} passHref>
            <a>
              <img
                alt="profile.png"
                className="h-10 w-10 self-center"
                src="/assets/profile.png"
              />
            </a>
          </Link>
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
        {data.map((d, ind) => {
          return d.nextLink ? (
            <Link href={d.link}>
              <a className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-grey-darkest hover:text-blue-dark font-semibold text-lg">
                {d.title}
              </a>
            </Link>
          ) : (
            <a
              key={ind}
              target="_blank"
              rel="noreferrer"
              href={d.link}
              className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-grey-darkest hover:text-blue-dark font-semibold text-lg"
            >
              {d.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Header;

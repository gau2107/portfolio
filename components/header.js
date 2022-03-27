import data from "/public/assets/HeaderData.json";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div
          className="mb-2 sm:mb-0 flex flex-row
  "
        >
          <div className="h-10 w-80 self-center mr-2">
            <Link href={"/"} passHref>
              <a>
                <img
                  alt="profile pic"
                  className="h-10 w-10 self-center mr-0 inline"
                  src="/assets/favicon-32x32.png"
                />
                <span className="text-3xl font-bold whitespace-pre" style={{position: 'relative', top: '8px'}}>
                  {`  Gaurav Solanki`}
                </span>
              </a>
            </Link>
          </div>
        </div>

        <div className="sm:mb-0 self-center">
          {data.map((d, ind) => {
            return d.nextLink ? (
              <Link key={ind} href={d.link}>
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
      <div className="pb-8"></div>
    </>
  );
}

export default Header;

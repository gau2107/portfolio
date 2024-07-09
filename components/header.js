import data from "/public/assets/HeaderData.json";
import Link from "next/link";

function Header() {
  const linkClassName = `block text-grey-darkest hover:text-blue-dark font-semibold text-lg 
   hover:text-slate-500`;
  return (
    <>
      <nav className="font-sans flex flex-col text-center items-center content-center sm:flex-row sm:text-left sm:justify-between px-6 py-2 bg-white shadow sm:items-center w-full">
        <div className="mb-2 sm:mb-0 flex flex-row flex-wrap">
          <div className="">
            <Link href={"/"} passHref>
              <a className="flex items-center">
                <img
                  alt="profile pic"
                  className="h-10 w-10 self-center mr-0 inline"
                  src="/assets/favicon-32x32.png"
                />
                <span className="md:text-3xl sm:text-2xl font-bold whitespace-pre">
                  {`  Gaurav Solanki`}
                </span>
              </a>
            </Link>
          </div>
        </div>

        <div className="sm:mb-0 flex gap-6 flex-wrap">
          {data.map((d, ind) => {
            return d.nextLink ? (
              <Link key={ind} href={d.link}>
                <a className={linkClassName}>
                  {d.title}
                </a>
              </Link>
            ) : (
              <a
                key={ind}
                target="_blank"
                rel="noreferrer"
                href={d.link}
                className={linkClassName}
              >
                {d.title}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Header;

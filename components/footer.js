function Footer() {
  return (
    <div className="pt-6">
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600 inset-x-0 fixed bottom-0">
      <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with me on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a
            target="_blank" rel="noreferrer"
            href="https://www.linkedin.com/in/gaurav-solanki-2b6121117/"
            className="mr-6 text-gray-600"
          >
            <img
              className="svg-inline--fa fa-facebook-f h-6"
              src="assets/icons/linkedin.svg"
            />
          </a>
          <a
            target="_blank" rel="noreferrer"
            href="https://github.com/gau2107"
            className="mr-6 text-gray-600"
          >
            <img
              className="svg-inline--fa fa-facebook-f h-6"
              src="assets/icons/github.svg"
            />
          </a>
          <a
            target="_blank" rel="noreferrer"
            href="https://leetcode.com/solankigaurav/"
            className="mr-6 text-gray-600"
          >
            <img
              className="svg-inline--fa fa-facebook-f h-6"
              src="assets/icons/leetcode.png"
            />
          </a>
          <a
            target="_blank" rel="noreferrer"
            href="https://www.instagram.com/gaurav.psd/"
            className="mr-6 text-gray-600"
          >
            <img
              className="svg-inline--fa fa-facebook-f h-6"
              src="assets/icons/instagram.svg"
            />
          </a>
        </div>
      </div>

      {/* <div className="text-center p-6 bg-gray-200">
          <span>© 2021 Copyright:</span>
          <a className="text-gray-600 font-semibold" href="https://mdbootstrap.com/">Tailwind Elements</a>
        </div> */}
    </footer>
    </div>
  );
}

export default Footer;

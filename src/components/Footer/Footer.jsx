import logo from "../../assets/image/logo.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 px-32 justify-between mt-10">
      <div className="flex items-center gap-3">
        <img className="h-8 w-auto" src={logo} alt="" />
        <h3 className="font-bold uppercase" style={{ color: "#632EE3" }}>
          Hero.IO
        </h3>
      </div>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/mojahidmamu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
      3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61 
      -.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 
      1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998 
      .108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
      0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3-.405 
      c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23 
      .645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 
      0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 
      0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57 
      C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/abdullah.all.mojahid.2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a
            href="https://codeforces.com/profile/Abdullah_all_Mojahid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/Codeforces-000?style=for-the-badge&logo=codeforces&logoColor=white"
              alt=""
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

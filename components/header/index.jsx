import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className=" bg-green-700 h-[10vh] flex justify-center items-center">
        <div className="container mx-auto flex items-center justify-between">
          <nav>
            <ul className="flex justify-start items-center gap-5">
              <li>
                <Link
                  className="rounded-md bg-blue-500 transition-all duration-500 hover:bg-blue-900 text-white flex items-center justify-center w-20 h-8"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-md bg-blue-500 transition-all duration-500 hover:bg-blue-900 text-white flex items-center justify-center w-20 h-8"
                  href={"/movies"}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-md bg-blue-500 transition-all duration-500 hover:bg-blue-900 text-white flex items-center justify-center w-20 h-8"
                  href={"/actors"}
                >
                  Actors
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            href={"/"}
            className="transition-all duration-500 hover:text-red-400 text-white text-lg flex items-center justify-center rounded-lg w-60 h-10"
          >
            Gandalf's Movies
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

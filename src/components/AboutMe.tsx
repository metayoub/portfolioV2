interface AboutMeProps {
  about: {
    picture: string;
    about: string[];
    title: string;
    subtitle: string[];
    resume: string;
  };
}

const AboutMe: React.FC<AboutMeProps> = ({ about }) => {
  return (
    <div
      id="about"
      className="relative min-h-screen flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl px-4 mx-auto">
        <blockquote className="relative grid items-center bg-gray-100 dark:bg-gray-900 shadow-xl md:grid-cols-3 rounded-xl">
          <img
            className="hidden object-cover w-full h-full rounded-l-xl md:block"
            src={about.picture}
          />
          <article className="relative p-6 md:p-8 md:col-span-2">
            <span className="text-gray-800 dark:text-gray-300">
              <svg
                className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                  stroke="currentColor"
                  strokeWidth="8"
                ></path>
              </svg>
            </span>

            <div className="space-y-8">
              <p className="text-base sm:leading-relaxed md:text-lg text-justify text-gray-900 dark:text-gray-200">
                {about.about.join(" ")}
              </p>

              <footer className="flex items-center space-x-4 md:space-x-0">
                <img
                  className="w-12 h-12 rounded-full md:hidden"
                  src="https://randomuser.me/api/portraits/men/68.jpg"
                />
                <span className="font-bold text-lg text-gray-800 dark:text-gray-200">
                  {about.title}
                </span>
              </footer>
            </div>
          </article>
        </blockquote>
      </div>
    </div>
  );
};

export default AboutMe;

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  footer: {
    title: string;
    linkedin: string;
    github: string;
    facebook: string;
    instagram: string;
  };
}

const Footer: React.FC<FooterProps> = ({ footer }) => {
  const getYear = () => new Date().getFullYear();

  return (
    <footer className=" text-gray-900 dark:text-gray-300 py-4 px-6 flex justify-around items-center">
      <p className="text-base font-medium">
        © {getYear()} {footer?.title}
      </p>
      <div className="flex space-x-4">
        <a
          href={footer.facebook}
          className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-500"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href={footer.github}
          className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-500"
        >
          <FaGithub size={24} />
        </a>
        <a
          href={footer.linkedin}
          className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-500"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

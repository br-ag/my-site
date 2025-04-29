import { FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa6";

export const Socials = () => {
  const navList = [
    {
      name: "github",
      icon: FaGithub,
    },
    {
      name: "linkedin",
      icon: FaLinkedin,
    },
    {
      name: "gmail",
      icon: FaGoogle,
    },
  ];

  return (
    <ul className="ml-1 mt-8 flex items-center">
      {navList.map((item, index) => {
        const Icon = item.icon;
        return (
          <li className="mr-5">
            <a className="block hover:text-white" key={index} href="#" aria-label={item.name}>
              <Icon size={25} />
            </a>
          </li>
        );
      })}
    </ul>
  ) ;
};

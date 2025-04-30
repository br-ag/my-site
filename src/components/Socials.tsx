import { FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa6";

export const Socials = () => {
  const navList = [
    {
      name: "github",
      icon: FaGithub,
      link: "https://github.com/br-ag",
    },
    {
      name: "linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/briandikaag/",
    },
    {
      name: "gmail",
      icon: FaGoogle,
      link: "mailto:briandika.mankin@gmail.com",
    },
  ];

  return (
    <ul className="ml-1 mt-8 flex items-center">
      {navList.map((item, index) => {
        const Icon = item.icon;
        return (
          <li className="mr-5">
            <a className="block hover:text-white" key={index} href={item?.link} aria-label={item.name} target="_blank">
              <Icon size={25} />
            </a>
          </li>
        );
      })}
    </ul>
  ) ;
};

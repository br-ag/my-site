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
    <nav className="flex gap-4">
      {navList.map((item, index) => {
        const Icon = item.icon;
        return (
          <a key={index} href="#" aria-label={item.name}>
            <Icon size={24} />
          </a>
        );
      })}
    </nav>
  );
};
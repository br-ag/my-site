export const Nav = () => {
  const navList = [
    {
      section: "About",
    },
    {
      section: "Experience",
    },
    {
      section: "Projects",
    },
  ];

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {navList.map((item) => {
          console.log("ITEM", item);
          return (
            <li>
              <a className="group flex items-center py-3 active" href={ "#" + item?.section.toLowerCase()}>
                <span className="nav-indicator mr-4 h-px w-8 bg-[#ff0a54] transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-white group-focus-visible:text-white">
                  {item?.section}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

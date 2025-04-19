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
    <ul className="flex flex-col">
      {navList.map((item) => {
        console.log("ITEM", item);
        return (
          <li>
            <a href="">{item?.section}</a>
          </li>
        );
      })}
    </ul>
  );
};

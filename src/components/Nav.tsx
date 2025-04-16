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
    <div className="flex flex-col">
      {navList.map((item) => {
        console.log("ITEM", item);
        return <a href="">{item?.section}</a>;
      })}
    </div>
  );
};

export const Socials = () => {
    const navList = [
      {
        name: "github",
        icon: "About",
      },
      {
        name: "linkedin",
        icon: "Experience",
      },  
      {
        name: "gmail",
        icon: "Projects",
      },
    ];
  
    return (
      <nav>
        {navList.map((item) => {
          console.log("ITEM", item);
          return <a href="">{item?.name}</a>;
        })}
      </nav>
    );
  };
  
export const Projects = () => {
  const projects = [
    {
      project: "Mokomdo",
      about: "Multiwarehouse Marketplace",
      thumbnail: "MOKOMDO",
      stacks: ["JavaScript", "HTML", "SCSS", "Python", "Jinja", "ERPNext", "Web Application"]
    },
  ]
  return (
    <div className="flex flex-col gap-4">
      {projects.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div className="font-semibold">{item.project}</div>
          <div>{item.about}</div>
          <div>{item.stacks.join(", ")}</div>
          <div>{item.thumbnail}</div>
        </div>
      ))}
    </div>
  );
};

export const Resume = () => {
  const experiences = [
    {
      company: "VEF Solution",
      position: "System Engineer",
      stacks: [
        "JavaScript",
        "HTML",
        "SCSS",
        "Python",
        "Jinja",
        "ERPNext",
        "Web Application",
      ],
      period: "June 2023 - February 2025",
    },
    {
      company: "VEF Solution",
      position: "Full Stack Web Developer",
      stacks: [
        "JavaScript",
        "HTML",
        "SCSS",
        "Python",
        "Jinja",
        "ERPNext",
        "Web Application",
      ],
      period: "June 2023 - February 2025",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {experiences.map((item, index) => (
        <div key={index} className="flex flex-col">
          <div className="font-semibold">{item.company}</div>
          <div>{item.position}</div>
          <div>{item.stacks.join(", ")}</div>
          <div>{item.period}</div>
        </div>
      ))}
    </div>
  );
};

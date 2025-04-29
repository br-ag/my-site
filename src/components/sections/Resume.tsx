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
      desc: "I contribute across the full stack to enhance feature functionality and performance in a scalable ERP system, working closely with clients to align solutions with their business processes. My role involves designing intuitive interfaces, building reliable backend logic, and maintaining high-quality code through thorough testing and optimization to ensure long-term efficiency and a seamless user experience.",
    },
    {
      company: "kaptenmulyono.org",
      position: "Full Stack Web Developer",
      stacks: ["JavaScript", "HTML", "CSS", "React", "Chakra UI", "Node.js"],
      period: "March 2023",
      desc: "I designed, developed, and hosted a website for a historical figure, working closely with the client to bring their vision to life. The project focused on creating tailored designs that matched the theme and content while ensuring a user-friendly and engaging experience.",
    },
  ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#38040e]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {experiences?.map((item) => (
            <li className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#590D22]/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[#[#590D22] sm:col-span-2"
                  aria-label={item?.period}
                >
                  {item?.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[#ff0a54] focus-visible:text-teal-300  group/link text-base"
                        href=""
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={item?.position}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {item?.position} · {" "}
                          <span className="inline-block">
                            {item?.company}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{item?.desc}</p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {item?.stacks.map((stack) => (
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-[#ff4d6d]/10 px-3 py-1 text-xs font-medium leading-5 text-[#ff0a54]">
                          {stack}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group hover:text-[#ff0a54]"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span>
              <span className="border-b-2 border-transparent pb-px transition group-hover:border-[#ff0a54] motion-reduce:transition-none text-white">
                View Full Project Archive
              </span>
              <span className="whitespace-nowrap ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

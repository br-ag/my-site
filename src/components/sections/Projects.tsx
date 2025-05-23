import mokomdo_thumbnail from "../../assets/projects/mokomdo_thumbnail.png";

export const Projects = () => {
  const projects = [
    {
      project: "Mokomdo",
      about:
        "Marketplace that optimizes order routing based on customer location. It integrates APIs for real-time delivery cost estimates and precise address fetching. The platform includes an admin interface for managing products and a customer-facing side for a seamless shopping experience. Key features include automatic warehouse selection and intuitive product management.",
      thumbnail: mokomdo_thumbnail,
      stacks: [
        "JavaScript",
        "HTML",
        "SCSS",
        "Python",
        "Jinja",
        "ERPNext",
        "Web Application",
      ],
      link: "https://github.com/br-ag/jcwd220405",
    },
  ];
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#38040e]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#ffccd5] lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects?.map((item) => (
            <li className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#590D22]/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-[#ffccd5] hover:text-[#ff0a54] focus-visible:text-teal-300  group/link text-base"
                      href={item?.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={item?.project}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {item?.project}
                        <span className="inline-block">
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
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{item?.about}</p>
                </div>
                <img
                  alt="Build a Spotify Connected App Newline course marketing card"
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-video object-cover rounded border-2 border-[#ffccd5]/10 transition group-hover:border-[#ffccd5]/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  style={{ color: "transparent" }}
                  src={mokomdo_thumbnail}
                  srcSet={`${mokomdo_thumbnail} 1x, ${mokomdo_thumbnail} 2x`}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-[#ffccd5] font-semibold group hover:text-[#ff0a54]"
            aria-label="View Full Project Archive"
            href="https://github.com/br-ag?tab=repositories"
            target="_blank"
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

const WorkExperience = () => {
  const jobs = [
    {
      title: "Technical Consultant II",
      company: "Thirdera a Cognoizant Company",
      period: "Jun 2023 – Present",
      current: true,
      responsibilities: [
        "Collaborating with stakeholders to define technical requirements.",
        "Leading the development of scalable web applications using Vanilla JavaScript and/or Angular.",
        "Maintaining and optimizing existing codebases."],
    },
    {
      title: "Technical Consultant I",
      company: "Handcloud Solutions Inc.",
      period: "Oct 2021 – Jun 2023",
      responsibilities: [
        "Implemented scalable React components with TypeScript.",
        "Worked closely with product teams to define and scope features.",
        "Optimized application performance and accessibility.",
      ],
    },
    {
      title: "Full-Stack Developer (Full-Time)",
      company: "Witann Technologies",
      period: "Apr 2021 – Oct 2021",
      responsibilities: [
        "Developed REST APIs with Node.js and Express.",
        "Built responsive interfaces using React and Tailwind CSS.",
        "Maintained MySQL database schemas and data consistency.",
      ],
    },
    {
      title: "Full-Stack Developer (Part-Time)",
      company: "Witann Technologies",
      period: "Dec 2020 – Apr 2021",
      responsibilities: [
        "Worked on end-to-end features in an Agile environment.",
        "Integrated third-party APIs and ensured cross-browser compatibility.",
        "Participated in daily stand-ups and sprint planning.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Jl Marketing",
      period: "Mar 2020 – Apr 2021",
      responsibilities: [
        "Designed reusable UI components in React.",
        "Created backend services to support new features.",
        "Ensured security best practices during development.",
        "Customer support and troubleshooting.",
        "Sever management and deployment.",
        "Ecommerce platform development using Shopify and Wordpress",
    ]
  }
];
  return (
    <>
      <section className="text-white py-16 px-4 md:px-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-8">My Work Experience</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
            <div key={index} className="bg-[#1e293b] mb-6 p-5 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-green-400 font-semibold text-lg">
                  {job.title}
                </h3>
                <span
                  className={`text-sm px-2 py-1 rounded-full ${job.current
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300"
                    }`}
                >
                  {job.current ? "Current" : "Previous"}
                </span>
              </div>
              <div className="text-gray-300 text-sm mb-2">
                {job.company} • {job.period}
              </div>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {job.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
            ))}
          </div>
          {/*           <ol className="">
            {jobs.map((job, index) => (
              <li className="mb-10 ml-6" key={index}>
                <span className="inline flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{job.title} ({job.modality}) {job.active ? <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Current</span> : ''}</h3>
                <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{job.company}</p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{job.date}</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">{job.activities}</p>
              </li>
            ))}
          </ol> */}
        </div>
      </section>
    </>
  )
}

export default WorkExperience;
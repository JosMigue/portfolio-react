import developerData from "../../data/developer.json";
const WorkExperience = () => {
  const jobs = developerData.experience;
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
        </div>
      </section>
    </>
  )
}

export default WorkExperience;
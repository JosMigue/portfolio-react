import {MainSection} from './layout/MainSection'
const WorkExperience = () => {
  const jobs =[
    {
      title:'Technical Consultant II',
      company:'Thirdera a Cognizant Company',
      modality: 'Full time',
      date:'Jun 2023 - Current',
      active:true,
      activities: 'Web development | JavaScript | ITSM | CSM | SAM | CSA'
    },
    {
      title:'Technical Consultant I',
      company:'Handcloud Solutions',
      modality: 'Full time',
      date:'Oct 2021 - Jun 2023',
      active:false,
      activities: 'ServicenNow Developer | Web development | Responsive development | JavaScript | ITSM | CSM | SAM | CSA'
    },
    {
      title:'Full-Stack Developer',
      company:'Witann Technologies',
      modality: 'Full time',
      date:'April 2021 - Oct 2021',
      active:false,
      activities: 'Backend Developer | Frontend Developer | Responsive development | Teamworking | Problem Solving | Self-learning'
    },
    {
      title:'Full-Stack Developer',
      company:'Witann Technologies',
      modality: 'Part time',
      date:'Dic 2020 - April 2021',
      active:false,
      activities: 'Backend Developer | Frontend Developer | Responsive development | Teamworking | Problem Solving | Self-learning'
    },
    {
      title:'Full-Stack Developer',
      company:'JL Marketing',
      modality: 'Full time',
      date:'March 2020 - April 2021',
      active:false,
      activities: 'Backend Developer | Frontend Developer | Responsive development | Teamworking | Problem Solving | Self-learning | Customer Support Analyst  | E-commerce Development (Shopify, Prestashop, Wordpress)'
    }
  ];
  return (
    <MainSection>
      <div>
        <ol className="relative border-l border-gray-200">
          {jobs.map((job, index) => (
            <li className="mb-10 ml-6" key={index}>            
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{job.title} ({job.modality}) {job.active ? <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Current</span> : ''}</h3>
              <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{job.company}</p>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{job.date}</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">{job.activities}</p>
            </li>
          ))} 
          <li>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
             </span>
          </li>               
        </ol> 
      </div>
    </MainSection>
  )
}

export default WorkExperience;
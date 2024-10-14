'use client'
import { JobListing } from '@my/ui/src/JobListing'
// import { getJob } from '@my/app/utils/jobUtils'
// import { getJob } from '@my/app/utils/jobUtils'
import { Metadata } from 'next'
const jobsData = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechNova Solutions',
    location: 'San Francisco, CA',
    description:
      'We are looking for a full stack developer experienced with front-end and back-end technologies, capable of building web applications in a fast-paced environment. The ideal candidate should be skilled in modern frameworks, cloud services, and databases.',
    responsibilities: [
      'Design and develop full-stack web applications with React and Node.js',
      'Collaborate with product managers and designers to deliver high-quality features',
    ],
    creationDate: 'September 21, 2024',
    recruitmentPeriod: 'October 1, 2024 to October 15, 2024',
    hiringManager: 'John Doe',
    recruitmentQuota: 5,
    jobType: 'Fulltime',
    experience: '5+ Years',
    salary: '$150k - $180k/yr',
    lastUpdate: '5 minutes ago',
    matchScore: 92,
    headerImage: '',
    companyLogo: '',
  },
  {
    id: '2',
    title: 'Machine Learning Engineer',
    company: 'AI Innovations Inc.',
    location: 'New York, NY',
    description:
      'We are seeking a Machine Learning Engineer to build and optimize algorithms for real-time data processing and analytics. You will work closely with data scientists and software engineers to implement machine learning models into production systems.',
    responsibilities: [
      'Design, build, and deploy machine learning models for real-time data processing',
      'Collaborate with data scientists and software engineers to improve algorithms',
    ],
    creationDate: 'September 21, 2024',
    recruitmentPeriod: 'October 5, 2024 to October 20, 2024',
    hiringManager: 'Jane Smith',
    recruitmentQuota: 3,
    jobType: 'Fulltime',
    experience: '3+ Years',
    salary: '$140k - $170k/yr',
    lastUpdate: '10 minutes ago',
    matchScore: 88,
    headerImage: '',
    companyLogo: '',
  },
  {
    id: '3',
    title: 'DevOps Specialist',
    company: 'CloudScale Systems',
    location: 'Austin, TX',
    description:
      'Looking for a DevOps Specialist to enhance infrastructure automation, CI/CD pipelines, and cloud deployments. The ideal candidate has hands-on experience with AWS and Docker.',
    responsibilities: [
      'Manage and improve CI/CD pipelines for continuous integration and delivery',
      'Automate infrastructure using tools like Terraform and Docker',
    ],
    creationDate: 'September 21, 2024',
    recruitmentPeriod: 'October 10, 2024 to October 25, 2024',
    hiringManager: 'Robert Johnson',
    recruitmentQuota: 4,
    jobType: 'Fulltime',
    experience: '4+ Years',
    salary: '$130k - $160k/yr',
    lastUpdate: '15 minutes ago',
    matchScore: 65,
    headerImage: '',
    companyLogo: 'https://placeholder.com/100x100',
  },
  {
    id: '4',
    title: 'Frontend React Developer',
    company: 'UX Wizards',
    location: 'Seattle, WA',
    description:
      'We are looking for a React developer passionate about building interactive user interfaces for web applications. Strong proficiency in JavaScript and front-end libraries is required.',
    responsibilities: [
      'Develop and maintain front-end web applications using React.js',
      'Work closely with designers to create responsive user interfaces',
    ],
    creationDate: 'September 21, 2024',
    recruitmentPeriod: 'October 1, 2024 to October 10, 2024',
    hiringManager: 'Alice Taylor',
    recruitmentQuota: 2,
    jobType: 'Fulltime',
    experience: '3+ Years',
    salary: '$120k - $150k/yr',
    lastUpdate: '8 minutes ago',
    matchScore: 90,
    headerImage: '',
    companyLogo: 'https://placeholder.com/100x100',
  },
  {
    id: '5',
    title: 'Blockchain Engineer',
    company: 'CryptoTech Solutions',
    location: 'Miami, FL',
    description:
      'Seeking a Blockchain Engineer to develop and maintain decentralized applications. You should have experience with Ethereum and smart contract development.',
    responsibilities: [
      'Design and build decentralized applications and smart contracts',
      'Collaborate with cross-functional teams to define and deliver new features',
    ],
    creationDate: 'September 21, 2024',
    recruitmentPeriod: 'October 15, 2024 to October 30, 2024',
    hiringManager: 'Mark Evans',
    recruitmentQuota: 3,
    jobType: 'Fulltime',
    experience: '4+ Years',
    salary: '$140k - $180k/yr',
    lastUpdate: '12 minutes ago',
    matchScore: 82,
    headerImage: '',
    companyLogo: 'https://placeholder.com/100x100',
  },
]

// import { cookies } from 'next/headers'

// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//   const job = await getJob(params.id)
//   return {
//     title: `${job.title} - Kaamyaab Job Listing`,
//     description: job.description.substring(0, 160),
//   }
// }

export default function JobPage({ params }: { params: { id: string } }) {
  // const job = await getJob(params.id)
  const job = jobsData.find((job) => job.id === params.id)
  // const cookieStore = cookies()
  // const isLoggedIn = cookieStore.get('isLoggedIn')?.value === 'true'
  const isLoggedIn = true

  return <JobListing job={job} isLoggedIn={isLoggedIn} />
}

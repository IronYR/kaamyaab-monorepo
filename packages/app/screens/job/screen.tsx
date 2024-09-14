'use client'
import { YStack, XStack, ScrollView, useMedia } from '@my/ui'
import JobCard from '@my/ui/src/JobCard'

const posts = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechNova Solutions',
    location: 'San Francisco, CA',
    matchScore: '92',
    salary: '$150k - $180k/yr',
    imageSrc: '',
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    company: 'AI Innovations Inc.',
    location: 'New York, NY',
    matchScore: '88',
    salary: '$140k - $170k/yr',
    imageSrc: '',
  },
  {
    id: 3,
    title: 'DevOps Specialist',
    company: 'CloudScale Systems',
    location: 'Austin, TX',
    matchScore: '65',
    salary: '$130k - $160k/yr',
    imageSrc: '',
  },
  {
    id: 4,
    title: 'Frontend React Developer',
    company: 'UX Wizards',
    location: 'Seattle, WA',
    matchScore: '90',
    salary: '$120k - $150k/yr',
    imageSrc: '',
  },
  {
    id: 5,
    title: 'Blockchain Engineer',
    company: 'CryptoTech Solutions',
    location: 'Miami, FL',
    matchScore: '82',
    salary: '$140k - $180k/yr',
    imageSrc: '',
  },
  {
    id: 6,
    title: 'Mobile App Developer (iOS/Android)',
    company: 'AppGenius Labs',
    location: 'Los Angeles, CA',
    matchScore: '87',
    salary: '$130k - $160k/yr',
    imageSrc: '',
  },
  {
    id: 7,
    title: 'Data Scientist',
    company: 'DataMinds',
    location: 'Chicago, IL',
    matchScore: '84',
    salary: '$120k - $150k/yr',
    imageSrc: '',
  },
  {
    id: 8,
    title: 'Cybersecurity Analyst',
    company: 'SecureNet',
    location: 'Washington, DC',
    matchScore: '86',
    salary: '$130k - $160k/yr',
    imageSrc: '',
  },
  {
    id: 9,
    title: 'UX/UI Designer',
    company: 'DesignCraft',
    location: 'San Francisco, CA',
    matchScore: '89',
    salary: '$125k - $155k/yr',
    imageSrc: '',
  },
  {
    id: 10,
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Seattle, WA',
    matchScore: '83',
    salary: '$135k - $165k/yr',
    imageSrc: '',
  },
  {
    id: 11,
    title: 'Financial Analyst',
    company: 'FinancePro',
    location: 'New York, NY',
    matchScore: '81',
    salary: '$125k - $155k/yr',
    imageSrc: '',
  },
]

export default function PostScreen() {
  const media = useMedia() // Adjust breakpoint as needed

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: media.xs ? 'column' : 'row',
        flexWrap: media.xs ? 'nowrap' : 'wrap',
        justifyContent: media.xs ? 'center' : 'flex-start',
        gap: 16, // Adjust gap between cards as needed
        padding: 16, // Adjust padding as needed
      }}
    >
      {posts.map((post) => (
        <JobCard key={post.id} {...post} />
      ))}
    </ScrollView>
  )
}

'use client'
import { YStack, XStack, ScrollView, useMedia } from '@my/ui'
import JobCard from '@my/ui/src/JobCard'

const posts = [
  // Sample data for posts
  {
    id: 1,
    title: 'Job 1',
    company: 'Company A',
    location: 'Location A',
    matchScore: '75%',
    salary: '$164k/yr',
    imageSrc: '',
  },
  {
    id: 2,
    title: 'Job 2',
    company: 'Company B',
    location: 'Location B',
    matchScore: '80%',
    salary: '$170k/yr',
    imageSrc: '',
  },
  {
    id: 3,
    title: 'Job 2',
    company: 'Company B',
    location: 'Location B',
    matchScore: '80%',
    salary: '$170k/yr',
    imageSrc: '',
  },
  {
    id: 4,
    title: 'Job 2',
    company: 'Company B',
    location: 'Location B',
    matchScore: '80%',
    salary: '$170k/yr',
    imageSrc: '',
  },
  {
    id: 5,
    title: 'Job 2',
    company: 'Company B',
    location: 'Location B',
    matchScore: '80%',
    salary: '$170k/yr',
    imageSrc: '',
  },
  {
    id: 6,
    title: 'Job 2',
    company: 'Company B',
    location: 'Location B',
    matchScore: '80%',
    salary: '$170k/yr',
    imageSrc: '',
  },
  // Add more posts as needed
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

'use client'
import { YStack, XStack, ScrollView, useMedia, Spinner, Text } from '@my/ui'
import JobCard from '@my/ui/src/JobCard'
import { useEffect, useState } from 'react'

// Define the JobListing type based on the schema
type JobListing = {
  id: string
  title: string
  company: string
  location: string
  employmentType: string
  description: string
  salaryRange?: string
  requirements: string
  postedDate: string
  recruiter: string
}

export default function PostScreen() {
  const media = useMedia()
  const [jobListings, setJobListings] = useState<JobListing[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await fetch('/api/jobListings')
        if (!response.ok) {
          throw new Error('Failed to fetch job listings')
        }
        const data = await response.json()
        setJobListings(data.jobListings)
      } catch (err) {
        setError('Error fetching job listings. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobListings()
  }, [])

  if (isLoading) {
    return (
      <YStack f={1} ai="center" jc="center">
        <Spinner size="large" />
      </YStack>
    )
  }

  if (error) {
    return (
      <YStack f={1} ai="center" jc="center">
        <Text>{error}</Text>
      </YStack>
    )
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: media.xs ? 'column' : 'row',
        flexWrap: media.xs ? 'nowrap' : 'wrap',
        justifyContent: media.xs ? 'center' : 'flex-start',
        gap: 16,
        padding: 16,
      }}
    >
      {jobListings.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          matchScore={Math.floor(Math.random() * (100 - 50 + 1)) + 50} // You may want to calculate this based on user profile
          salary={job.salaryRange || 'Not specified'}
          imageSrc="" // You may want to add company logos to your schema
          date={job.postedDate}
        />
      ))}
    </ScrollView>
  )
}

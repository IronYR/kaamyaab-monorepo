'use client'
import { JobListing } from '@my/ui/src/JobListing'
import { useEffect, useState } from 'react'
import { YStack, Spinner, Text } from '@my/ui'

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

export default function JobPage({ params }: { params: { id: string } }) {
  const [job, setJob] = useState<JobListing | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobListings/${params.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch job listing')
        }
        const data = await response.json()
        setJob(data.jobListing)
      } catch (err) {
        setError('Error fetching job listing. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchJob()
  }, [params.id])

  if (isLoading) {
    return (
      <YStack f={1} ai="center" jc="center">
        <Spinner size="large" />
      </YStack>
    )
  }

  if (error || !job) {
    return (
      <YStack f={1} ai="center" jc="center">
        <Text>{error || 'Job not found'}</Text>
      </YStack>
    )
  }

  // Assuming you have a way to determine if the user is logged in
  const isLoggedIn = true // Replace this with your actual authentication logic

  return <JobListing job={job} isLoggedIn={isLoggedIn} />
}

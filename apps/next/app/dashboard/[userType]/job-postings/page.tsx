'use client'
import React from 'react'
import { XStack, YStack, H1, Button, ScrollView } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { JobPostingCard } from '@my/ui/src/JobPostingCard'
import { useRouter } from 'next/navigation'

// Mock data for job postings
const jobPostings = [
  { id: 1, title: 'Senior React Developer', applicants: 12, date: '2023-04-01' },
  { id: 2, title: 'UX Designer', applicants: 8, date: '2023-04-05' },
  { id: 3, title: 'Product Manager', applicants: 15, date: '2023-04-10' },
  // Add more mock data as needed
]

export default function RecruiterJobPostingsPage() {
  const router = useRouter()

  const handleJobClick = (jobId: number) => {
    router.push(`/jobs/${jobId}`)
  }

  const handleShareJob = (jobId: number) => {
    // Implement share functionality
    console.log(`Sharing job with ID: ${jobId}`)
  }

  const handleEditJob = (jobId: number) => {
    // Implement edit functionality
    console.log(`Editing job with ID: ${jobId}`)
    // You might want to navigate to an edit page, for example:
    // router.push(`/job/${jobId}/edit`);
  }

  return (
    <ScrollView>
      <YStack padding="$4" space="$4">
        <H1>Your Job Postings</H1>
        <Button icon={<ChevronRight />} alignSelf="flex-start">
          Create New Job Posting
        </Button>
        <XStack flexWrap="wrap" justifyContent="space-between">
          {jobPostings.map((job) => (
            <JobPostingCard
              key={job.id}
              job={job}
              onJobClick={handleJobClick}
              onShareJob={handleShareJob}
              onEditJob={handleEditJob}
            />
          ))}
        </XStack>
      </YStack>
    </ScrollView>
  )
}

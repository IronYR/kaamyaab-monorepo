'use client'
import React, { useState, useEffect } from 'react'
import { XStack, YStack, H1, Button, ScrollView, Spinner } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { JobPostingCard } from '@my/ui/src/JobPostingCard'
import { useRouter } from 'next/navigation'
import { CreateJobPostingModal } from '@my/ui/src/CreateJobPostingModal'
import useUserInfo from '@my/ui/hooks/useUserInfo'

export default function RecruiterJobPostingsPage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [jobPostings, setJobPostings] = useState([])
  const { user, jwt, loading, error } = useUserInfo()

  useEffect(() => {
    if (user?.id) {
      fetchJobPostings(user.id)
    }
  }, [user, isModalOpen])

  const fetchJobPostings = async (recruiterId: string) => {
    try {
      const response = await fetch(`/api/recruiter/${recruiterId}/jobListing`)
      if (!response.ok) {
        throw new Error('Failed to fetch job postings')
      }
      const data = await response.json()
      setJobPostings(data)
    } catch (error) {
      console.error('Error fetching job postings:', error)
      // Handle error (e.g., show error message to user)
    }
  }

  const handleJobClick = (jobId: number) => {
    router.push(`/jobs/${jobId}`)
  }

  const handleShareJob = (jobId: number) => {
    // Implement share functionality
    navigator.clipboard.writeText('kaamyaab.pk/jobs/' + jobId)
    alert(`Copied to clipboard ${jobId}`)
  }

  const handleEditJob = (jobId: number) => {
    // Implement edit functionality
    alert(`Editing job with ID: ${jobId}`)
    // You might want to navigate to an edit page, for example:
    // router.push(`/job/${jobId}/edit`);
  }

  if (error) return <div>Error: {error}</div>
  return (
    <ScrollView>
      <YStack padding="$4" space="$4">
        <XStack justifyContent="space-between">
          <H1>Your Job Postings</H1>
          <Button
            icon={<ChevronRight />}
            alignSelf="flex-start"
            onPress={() => setIsModalOpen(true)}
          >
            Create New Job Posting
          </Button>
        </XStack>
        {loading && (
          <YStack f={1}>
            <Spinner />
          </YStack>
        )}
        <CreateJobPostingModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          user={user}
          jwt={jwt}
        />
        <XStack flexWrap="wrap" justifyContent="space-between">
          {jobPostings.map((job) => (
            <JobPostingCard
              key={job._id}
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

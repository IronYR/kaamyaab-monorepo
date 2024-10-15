import React from 'react'
import { Card, Text, Button, XStack, YStack } from 'tamagui'
import { Share2, Users, Edit3 } from '@tamagui/lucide-icons'

interface JobPostingCardProps {
  job: {
    id: number
    title: string
    applicants: number
    date: string
  }
  onJobClick: (jobId: number) => void
  onShareJob: (jobId: number) => void
  onEditJob: (jobId: number) => void
}

export function JobPostingCard({ job, onJobClick, onShareJob, onEditJob }: JobPostingCardProps) {
  return (
    <Card elevate bordered size="$4" marginBottom="$4" padding="$4" minWidth={'80%'}>
      <Card.Header>
        <Text fontWeight="bold" fontSize="$5" color="$blue10" onPress={() => onJobClick(job.id)}>
          {job.title}
        </Text>
      </Card.Header>
      <Card.Footer>
        <YStack space="$2" width="100%">
          <XStack justifyContent="space-between" alignItems="center">
            <XStack space="$2" alignItems="center">
              <Users size={16} />
              <Text fontSize="$3">{job.applicants} Applicants</Text>
            </XStack>
            <Text fontSize="$3" color="$gray10">
              Posted: {new Date(job.date).toLocaleDateString()}
            </Text>
          </XStack>
          <XStack space="$2">
            <Button icon={<Edit3 />} onPress={() => onEditJob(job.id)} variant="outlined" flex={1}>
              Edit
            </Button>
            <Button
              icon={<Share2 />}
              onPress={() => onShareJob(job.id)}
              variant="outlined"
              flex={1}
            >
              Share
            </Button>
          </XStack>
        </YStack>
      </Card.Footer>
    </Card>
  )
}

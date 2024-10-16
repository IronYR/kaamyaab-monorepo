import React from 'react'
import { Card, Text, Button, XStack, YStack } from 'tamagui'
import { Share2, Users, Edit3 } from '@tamagui/lucide-icons'

export function JobPostingCard({ job, onJobClick, onShareJob, onEditJob }) {
  return (
    <Card elevate bordered size="$4" marginBottom="$4" padding="$4" minWidth={'80%'}>
      <Card.Header>
        <Text fontWeight="bold" fontSize="$5" color="$blue10" onPress={() => onJobClick(job._id)}>
          {job.title}
        </Text>
      </Card.Header>
      <Card.Footer>
        <YStack space="$2" width="100%">
          <XStack justifyContent="space-between" alignItems="center">
            <XStack space="$2" alignItems="center">
              <Users size={16} />
              <Text fontSize="$3">
                {job.applicants || Math.ceil(Math.random() * 50)} Applicants
              </Text>
            </XStack>
            <Text fontSize="$3" color="$gray10">
              Posted: {new Date(job.postedDate).toLocaleDateString()}
            </Text>
          </XStack>
          <XStack space="$2">
            <Button icon={<Edit3 />} onPress={() => onEditJob(job._id)} variant="outlined" flex={1}>
              Edit
            </Button>
            <Button
              icon={<Share2 />}
              onPress={() => onShareJob(job._id)}
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

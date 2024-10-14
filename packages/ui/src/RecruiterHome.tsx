import React from 'react'
import { YStack, XStack, H1, H2, Button, Card, Text, Image } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'

function RecruiterHome() {
  return (
    <YStack gap="$4">
      <H1>Welcome, Recruiter!</H1>

      <Card elevate bordered p="$4">
        <H2>Active Job Postings</H2>
        <Text>Manage and review your current job listings.</Text>
        <Button mt="$2" icon={ChevronRight}>
          View Jobs
        </Button>
      </Card>

      <Card elevate bordered p="$4">
        <H2>Candidate Applications</H2>
        <Text>Review and respond to recent applications.</Text>
        <Button mt="$2" icon={ChevronRight}>
          Review Applications
        </Button>
      </Card>

      <Card elevate bordered p="$4">
        <H2>Upcoming Recruitment Events</H2>
        <Text>View and manage your participation in career fairs and networking events.</Text>
        <Button mt="$2" icon={ChevronRight}>
          Manage Events
        </Button>
      </Card>

      <Card elevate bordered p="$4">
        <H2>Company Profile</H2>
        <Text>Update your company information to attract top talent.</Text>
        <Button mt="$2" icon={ChevronRight}>
          Edit Profile
        </Button>
      </Card>
    </YStack>
  )
}

export default RecruiterHome

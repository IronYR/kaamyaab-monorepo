import React from 'react'
import { YStack, XStack, H1, H2, Button, Card, Text, Image } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'

function UniversityHome() {
  return (
    <YStack gap="$4">
      <H1>Welcome, University Partner!</H1>

      <Card elevate bordered p="$4">
        <H2>Student Placements</H2>
        <Text>Track and manage student job placements and internships.</Text>
        <Button mt="$2" icon={ChevronRight}>
          View Placements
        </Button>
      </Card>

      <Card elevate bordered p="$4">
        <H2>Campus Events</H2>
        <Text>Organize and promote career fairs and recruitment events on campus.</Text>
        <Button mt="$2" icon={ChevronRight}>
          Manage Events
        </Button>
      </Card>

      <Card elevate bordered p="$4">
        <H2>Partner Companies</H2>
        <Text>View and manage relationships with recruiting companies.</Text>
        <Button mt="$2" icon={ChevronRight}>
          View Partners
        </Button>
      </Card>

      <Card elevate bordered p="$4">
        <H2>University Profile</H2>
        <Text>Update your university information and showcase programs to attract recruiters.</Text>
        <Button mt="$2" icon={ChevronRight}>
          Edit Profile
        </Button>
      </Card>
    </YStack>
  )
}

export default UniversityHome

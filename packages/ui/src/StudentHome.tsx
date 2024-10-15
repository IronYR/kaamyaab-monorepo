import React from 'react'
import { YStack, XStack, H1, H2, Button, Card, Text, Image } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { useRouter } from 'next/navigation'
function StudentHome() {
  const router = useRouter()
  return (
    <YStack f={1} gap="$4" width={'70vw'}>
      <H1>Welcome, Student!</H1>

      <Card elevate bordered p="$4">
        <H2>Job Opportunities</H2>
        <Text>Discover the latest job openings tailored for you.</Text>
        <Button mt="$2" icon={ChevronRight} onPress={() => router.push('/dashboard/student/jobs')}>
          Explore Jobs
        </Button>
      </Card>

      <Card elevate bordered p="$4">
        <H2>Upcoming Events</H2>
        <Text>Stay updated with career fairs and networking events.</Text>
        <Button
          mt="$2"
          icon={ChevronRight}
          onPress={() => router.push('/dashboard/student/events')}
        >
          View Events
        </Button>
      </Card>

      <Card elevate bordered p="$4">
        <H2>Featured Companies</H2>
        <XStack space="$2" flexWrap="wrap">
          {['Company A', 'Company B', 'Company C'].map((company) => (
            <Card key={company} bordered width={100} height={100} ai="center" jc="center">
              <Image
                source={{ uri: `https://via.placeholder.com/100?text=${company}` }}
                width={80}
                height={80}
              />
            </Card>
          ))}
        </XStack>
        <Button mt="$2" icon={ChevronRight}>
          Explore Companies
        </Button>
      </Card>

      <Card elevate bordered p="$4">
        <H2>Your Profile</H2>
        <Text>Complete your profile to increase your chances of getting noticed.</Text>
        <Button mt="$2" icon={ChevronRight}>
          Update Profile
        </Button>
      </Card>
    </YStack>
  )
}

export default StudentHome

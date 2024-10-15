'use client'
import { YStack, Text, XStack } from 'tamagui'
import { EventCard } from '@my/ui/src/EventCard'
const events = [
  {
    id: 1,
    organization: 'Florida International...',
    title: 'BBC Summer Drop-Ins (2024)',
    date: 'Thu, May 16-Fri, Aug 23',
    type: 'In-person',
    tags: ['GUIDANCE'],
    studentsGoing: 51,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    organization: 'Random University...',
    title: 'Summer Career Fair (2024)',
    date: 'Thu, May 16-Fri, Aug 23',
    type: 'In-person',
    tags: ['GUIDANCE', 'CAREER FAIR'],
    studentsGoing: 11,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    organization: 'Company X...',
    title: 'Company X Virtual Event (2024)',
    date: 'Thu, May 16-Fri, Aug 23',
    type: 'Virtual',
    tags: ['Recruitment'],
    studentsGoing: 89,
    image: 'https://picsum.photos/200/300',
  },
  // ... add more events as needed
]
export default function EventsPage({ params }: { params: { userType: string } }) {
  if (params.userType !== 'student') {
    return <Text>Access denied. This page is for students only.</Text>
  }

  return (
    <YStack gap="$4" padding="$4">
      <Text fontSize="$9" fontWeight="bold">
        Events
      </Text>
      <XStack flexWrap="wrap" gap="$4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </XStack>
    </YStack>
  )
}

import React from 'react'
import { Card, XStack, YStack, Text, Avatar } from 'tamagui'
import { Event } from 'packages/app/types'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card width={375} height={200} padding="$4">
      <YStack space="$2">
        <XStack space="$2" alignItems="center">
          <Avatar circular size="$2" $xs={{ size: '$1' }}>
            <Avatar.Image
              accessibilityLabel="Company Logo"
              src={'https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png'}
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <Text fontSize="$3" fontWeight="bold">
            {event.organization}
          </Text>
        </XStack>
        <Text fontSize="$4" fontWeight="bold">
          {event.title}
        </Text>
        <Text fontSize="$2" color="$gray10">{`${event.type} · ${event.date}`}</Text>
        <XStack space="$2">
          {event.tags.map((tag, index) => (
            <Text key={index} fontSize="$1" backgroundColor="$blue2" color="$blue8" padding="$1">
              {tag}
            </Text>
          ))}
        </XStack>
        <XStack gap="$-10" alignItems="center">
          <Avatar circular size="$1">
            <Avatar.Image
              accessibilityLabel="User"
              src={'https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png'}
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <Avatar circular size="$1">
            <Avatar.Image
              accessibilityLabel="User"
              src={'https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png'}
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <Avatar circular size="$1">
            <Avatar.Image
              accessibilityLabel="User"
              src={'https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png'}
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <Text fontSize="$2">{`${event.studentsGoing} students going`}</Text>
        </XStack>
      </YStack>
    </Card>
  )
}

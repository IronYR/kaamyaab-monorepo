'use client'
import { YStack, XStack, Image, Avatar, Separator, Text, H1, H2, H4, H5, Card, H6 } from '@my/ui'

export default function JobCard({ title, company, location, matchScore, salary, imageSrc
 }) {
  return (
    <Card
      animation="medium"
      // // size="$4"
      // // width={250}
      // // height={300}
      // scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      width={375}
      $xs={{ width: 300,minHeight:150 }}
      flexWrap="wrap"
      background="Highlight"
    >
      <XStack
        flex={1}
        alignItems="flex-start"
        justifyContent={'flex-start'}
        borderRadius={'$4'}
        borderWidth={1}
        borderColor={'$accentBackground'}
        // background={'$accentBackground'}
      >
        <YStack flex={1} justifyContent="flex-start" alignItems="center" gap="$4">
          <Avatar circular size="$7" $xs={{size:"$5"}}>
          <Avatar.Image
              accessibilityLabel="Job Image"
              src={imageSrc || "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"}
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
        </YStack>
        <YStack flex={2}>
          <H2>{title}</H2>
          <H4>{company}</H4>
          <Text fontFamily={'$body'}>{location}</Text>
          <Text>Your match score: {matchScore}</Text>
          <Text>{salary} visibility 0 • month Just now</Text>
        </YStack>
      </XStack>
    </Card>
  )
}

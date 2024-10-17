'use client'
import { YStack, XStack, Avatar, Text, H3, H5, Card, Paragraph, Button } from '@my/ui'
import { Link } from 'solito/link'
// import { useRouter } from 'solito/router'
import { useRouter } from 'next/navigation'
export default function JobCard({ id, title, company, location, matchScore, salary, imageSrc, date }) {
  const router = useRouter()

  const handleJobClick = () => {
    router.push(`/jobs/${id}`)
  }
  let d = new Date(date).toLocaleString()
  return (
    <Card
      animation="medium"
      hoverStyle={{ scale: 1.02 }}
      width={360}
      $xs={{ width: 300, minHeight: 150 }}
      padding="$4"
      backgroundColor="$background"
      borderRadius="$4"
    >
      <XStack space="$4" alignItems="center">
        <Avatar circular size="$8" $xs={{ size: '$6' }}>
          <Avatar.Image
            accessibilityLabel="Company Logo"
            src={
              imageSrc ||
              'https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png'
            }
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
        <YStack flex={1} space="$2">
          <Button unstyled onPress={handleJobClick}>
            <H3 color="$color" hoverStyle={{ color: '$blue10' }}>
              {title}
            </H3>
          </Button>
          <Link href={`/company/${company}`}>
            <Button unstyled>
              <H5 color="$color" hoverStyle={{ color: '$blue10' }}>
                {company}
              </H5>
            </Button>
          </Link>
        </YStack>
      </XStack>
      <YStack space="$2" marginTop="$4">
        <Paragraph color="$color11">{location}</Paragraph>
        <Paragraph color="$color11">
          Match score:{' '}
          <Text color="$blue10" fontWeight="bold">
            {matchScore}%
          </Text>
        </Paragraph>
        <Paragraph color="$color11">{salary} • {d}</Paragraph>
      </YStack>
    </Card>
  )
}

'use client'
import { YStack, XStack, ScrollView, Text, H1, H2, H3, Paragraph, Button, Image } from '@my/ui'
import { useRouter } from 'next/navigation'

export function JobListing({ job, isLoggedIn }) {
  const router = useRouter()

  const handleApply = () => {
    router.push('/onboarding/student')
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <ScrollView>
      <XStack flex={1} paddingHorizontal="$12">
        <YStack flex={1} />
        <YStack flex={2} space="$4" padding="$4" backgroundColor="$background">
          {isLoggedIn && (
            <Button onPress={handleBack} alignSelf="flex-start">
              Back
            </Button>
          )}
          <Image
            source={{
              uri: job.headerImage || 'https://s1.zerochan.net/Aoha.%28Twintail%29.600.2145423.jpg',
            }}
            aspectRatio={5}
            width="100%"
          />
          <H1>{job.title}</H1>
          <XStack space="$4" alignItems="center">
            <Image
              source={{
                uri:
                  job.companyLogo ||
                  'https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png',
              }}
              width={50}
              height={50}
            />
            <YStack>
              <H2>{job.company}</H2>
              <H3>{job.location}</H3>
            </YStack>
          </XStack>
          <Paragraph>{job.description}</Paragraph>
          <H3>Responsibilities:</H3>
          <YStack space="$2">
            {job.responsibilities.map((resp, index) => (
              <Text key={index}>• {resp}</Text>
            ))}
          </YStack>
          <H3>Job Details:</H3>
          <YStack space="$2">
            <Text>Job Creation Date: {job.creationDate}</Text>
            <Text>Recruitment Period: {job.recruitmentPeriod}</Text>
            <Text>Hiring Manager: {job.hiringManager}</Text>
            <Text>Recruitment Quota: {job.recruitmentQuota}</Text>
            <Text>Job Type: {job.jobType}</Text>
            <Text>Experience: {job.experience}</Text>
            <Text>Salary: {job.salary}</Text>
          </YStack>
          {isLoggedIn && (
            <YStack space="$2">
              <Text>Last Updated: {job.lastUpdate}</Text>
            </YStack>
          )}
          <Button onPress={handleApply} theme="active">
            Apply Now
          </Button>
        </YStack>
        <YStack flex={1} />
      </XStack>
    </ScrollView>
  )
}

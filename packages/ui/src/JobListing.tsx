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

  const handleEditJob = () => {
    // Implement the logic to edit the job
    router.push(`/edit-job/${job.id}`)
  }

  const isRecruiterOwner = true
  // && isLoggedIn && userType === 'recruiter' && recruiterId === job.recruiterId
  const date = new Date(job.postedDate).toLocaleDateString()
  return (
    <ScrollView>
      <XStack flex={1} paddingHorizontal="$12">
        <YStack flex={1} />
        <YStack flex={2} space="$4" padding="$4" backgroundColor="$background">
          <XStack justifyContent="space-between" alignItems="center">
            {isLoggedIn && <Button onPress={handleBack}>Back</Button>}
            {isRecruiterOwner && <Button onPress={handleEditJob}>Edit Job</Button>}
          </XStack>
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
          <H3>Requirements:</H3>
          <YStack space="$2">
            {/* {job.responsibilities.map((resp, index) => (
              <Text key={index}>• {resp}</Text>
            ))} */}
            <Text>{job.requirements}</Text>
          </YStack>
          <H3>Job Details:</H3>
          <YStack space="$2">
            <Text>Job Creation Date: {date}</Text>
            <Text>Hiring Manager: {job.recruiter}</Text>
            <Text>Job Type: {job.employmentType}</Text>
            <Text>Salary: {job.salaryRange}</Text>
          </YStack>
          {isLoggedIn && (
            <YStack space="$2">
              <Text>Last Updated: {date}</Text>
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

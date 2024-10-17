import {
  Button,
  SwitchThemeButton,
  SwitchRouterButton,
  XStack,
  YStack,
  H1,
  H2,
  Text,
  Input,
  Stack,
} from '@my/ui'
import { useLink } from 'solito/navigation'
import { useMedia } from 'tamagui'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })
  const onboardLink = useLink({
    href: '/onboarding/student',
  })
  const dashboardLink = useLink({
    href: '/dashboard/university/home',
  })
  const jobLink = useLink({
    href: '/dashboard/student/jobs',
  })
  const eventsLink = useLink({
    href: '/dashboard/recruiter/events',
  })
  const studentLink = useLink({ href: '/onboarding/student' })
  const employerLink = useLink({ href: '/onboarding/employer' })
  const careerCenterLink = useLink({ href: '/onboarding/career-center' })
  const media = useMedia()

  return (
    <YStack f={1} bg="$background">
      <Stack pos="absolute" t="$4" r="$4" zi={1}>
        <SwitchThemeButton />
      </Stack>

      {/* Main content */}
      <XStack f={1} flexDirection={media.sm ? 'column-reverse' : 'row'}>
        {/* Left side */}
        <YStack f={1} bg="$blue10" p="$4" jc="space-between" ai="stretch">
          <H1 col="$color" fow="bold">
            Kaamyaab
          </H1>
          <YStack ai="center" jc="center" f={1}>
            <YStack gap="$4" maw={400}>
              <H1 col="$color" fow="bold">
                Get the job done
              </H1>
              <H2 {...studentLink} size="$5">
                Students
              </H2>
              <Text>Launch the next step in your career.</Text>
              <H2 {...employerLink} size="$5">
                Employers
              </H2>
              <Text>Hire the next generation of talent.</Text>
              <H2 {...careerCenterLink} size="$5">
                Career Centers
              </H2>
              <Text>Bring the best jobs to your students.</Text>
              <H2 size="$5">Learn More</H2>
            </YStack>
          </YStack>
        </YStack>

        {/* Right side */}
        <YStack f={1} p="$4" jc="center" ai="center">
          <YStack w="100%" maw={400} gap="$4">
            <H1>Sign in</H1>
            <Text fow="bold">Students & Alumni</Text>
            <Text>Please select your school to sign in.</Text>
            <Input placeholder="Please select your school to sign in" />
            <Text>New to Kaamyaab? Select your school to get started.</Text>
            <Text fow="bold" mt="$4">
              Employers & Career Centers
            </Text>
            <Text>Please sign in with your email.</Text>
            <Input placeholder="email@example.edu" />
            <Button>Next</Button>
          </YStack>
        </YStack>
      </XStack>
    </YStack>
  )
}

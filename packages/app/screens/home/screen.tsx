import { Button, SwitchThemeButton, SwitchRouterButton, XStack, YStack } from '@my/ui'
import { useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'

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

  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background">
      <XStack
        pos="absolute"
        w="100%"
        t="$6"
        gap="$6"
        jc="center"
        fw="wrap"
        $sm={{ pos: 'relative', t: 0 }}
      >
        {Platform.OS === 'web' && (
          <>
            <SwitchRouterButton pagesMode={pagesMode} />
            <SwitchThemeButton />
          </>
        )}
      </XStack>

      <Button {...linkProps}>Link to user</Button>
      <Button {...onboardLink}>Onboard</Button>
      <Button {...dashboardLink}>University Dashboard</Button>
      <Button {...jobLink}>Student Job Postings</Button>
      <Button {...eventsLink}>Recruiter Events</Button>
    </YStack>
  )
}

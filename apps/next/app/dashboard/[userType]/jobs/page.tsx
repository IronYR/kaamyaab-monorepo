'use client'

import React from 'react'
import { YStack, H1 } from 'tamagui'
import { useParams } from 'next/navigation'
import JobScreen from 'app/screens/job/screen'
function JobsPage() {
  const params = useParams()
  const userType = params?.userType as string
  return (
    <YStack f={1} jc="center" ai="center" p="$4">
      <H1>Explore Opportunities Tailored to You</H1>
      <JobScreen />
    </YStack>
  )
}
export default JobsPage

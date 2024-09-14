'use client'

import React from 'react'
import { YStack, H1 } from 'tamagui'
import { useParams } from 'next/navigation'

function HomePage() {
  const params = useParams()
  const userType = params?.userType as string

  return (
    <YStack f={1} jc="center" ai="center" p="$4">
      <H1>Home Page for {userType}</H1>
    </YStack>
  )
}

export default HomePage

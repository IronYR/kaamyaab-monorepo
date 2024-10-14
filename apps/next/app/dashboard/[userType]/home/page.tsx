'use client'

import React from 'react'
import { YStack, H1, ScrollView } from 'tamagui'
import { useParams } from 'next/navigation'
import StudentHome from '@my/ui/src/StudentHome'
import RecruiterHome from '@my/ui/src/RecruiterHome'
import UniversityHome from '@my/ui/src/UniversityHome'

function HomePage() {
  const params = useParams()
  const userType = params?.userType as string

  const renderHomeContent = () => {
    switch (userType) {
      case 'student':
        return <StudentHome />
      case 'recruiter':
        return <RecruiterHome />
      case 'university':
        return <UniversityHome />
      default:
        return <H1>Home Page for {userType}</H1>
    }
  }

  return (
    <ScrollView>
      <YStack f={1} p="$4" space="$4">
        {renderHomeContent()}
      </YStack>
    </ScrollView>
  )
}

export default HomePage

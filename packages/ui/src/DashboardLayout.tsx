'use client'
import React from 'react'
import { styled, YStack } from 'tamagui'
import Sidebar from '@my/ui/src/Sidebar'
import { usePathname, useParams } from 'next/navigation'
import { getSidebarItemsForUserType } from '@my/ui/src/utils/sidebarItems'

const MainContainer = styled(YStack, {
  marginLeft: '15%',
  padding: '$4',
  backgroundColor: '$background',
  minHeight: '100%',
})

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const params = useParams()
  const userType = params.userType as string

  const sidebarItems = getSidebarItemsForUserType(userType)

  return (
    <YStack flexDirection="row" minHeight="100vh">
      <Sidebar currentPath={pathname} items={sidebarItems} />
      <MainContainer flex={1}>{children}</MainContainer>
    </YStack>
  )
}

export default DashboardLayout

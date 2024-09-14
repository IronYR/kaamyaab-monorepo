'use client'
import React from 'react'
import { styled, YStack, XStack, Stack } from 'tamagui'
import Sidebar from '@my/ui/src/Sidebar'
import { usePathname, useParams } from 'next/navigation'
import { getSidebarItemsForUserType } from '@my/ui/src/utils/sidebarItems'
import UserAvatar from '@my/ui/src/UserAvatar'

const SidebarWrapper = styled(Stack, {
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  width: '15%', // Adjust this value to match your desired sidebar width
  zIndex: 10,
})

const MainContainer = styled(YStack, {
  flex: 1,
  backgroundColor: '$background',
  minHeight: '100vh',
  marginLeft: '15%', // Should match the sidebar width
})

const TopBar = styled(XStack, {
  width: '100%',
  justifyContent: 'flex-end',
  paddingRight: '$3',
  paddingTop: '$3',
  paddingBottom: '$3',
})

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams()
  const userType = params.userType as string

  const sidebarItems = getSidebarItemsForUserType(userType)

  return (
    <YStack flex={1}>
      <SidebarWrapper>
        <Sidebar items={sidebarItems} />
      </SidebarWrapper>
      <MainContainer>
        <TopBar>
          <UserAvatar />
        </TopBar>
        {children}
      </MainContainer>
    </YStack>
  )
}

export default DashboardLayout

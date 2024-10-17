'use client'
import React, { useState } from 'react'
import { styled, YStack, XStack, Stack, Popover, Button } from 'tamagui'
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
  const [open, setOpen] = useState(false)

  const sidebarItems = getSidebarItemsForUserType(userType)

  return (
    <YStack flex={1}>
      <SidebarWrapper>
        <Sidebar items={sidebarItems} />
      </SidebarWrapper>
      <MainContainer>
        <TopBar>
          <Popover open={open} onOpenChange={setOpen} backgroundColor="$background">
            <Popover.Trigger asChild>
              <Button unstyled onPress={() => setOpen(true)}>
                <UserAvatar />
              </Button>
            </Popover.Trigger>

            <Popover.Content
              padding="$4"
              borderWidth={1}
              borderColor="$borderColor"
              enterStyle={{ y: -10, opacity: 0 }}
              exitStyle={{ y: -10, opacity: 0 }}
              elevate
              animation="quick"
              backgroundColor="$background" // Match the app's background color
            >
              <YStack space="$2">
                <Button
                  onPress={() => {
                    console.log('Profile')
                    setOpen(false)
                  }}
                >
                  Profile
                </Button>
                <Button
                  onPress={() => {
                    console.log('Settings')
                    setOpen(false)
                  }}
                >
                  Settings
                </Button>
                <Button
                  onPress={() => {
                    console.log('Logout')
                    setOpen(false)
                  }}
                >
                  Log out
                </Button>
              </YStack>
            </Popover.Content>
          </Popover>
        </TopBar>
        {children}
      </MainContainer>
    </YStack>
  )
}

export default DashboardLayout

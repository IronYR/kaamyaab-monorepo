import React from 'react'
import { YStack, Text, Button, styled, useTheme } from 'tamagui'
import { useRouter } from 'next/navigation'

const SidebarContainer = styled(YStack, {
  width: '15%',
  backgroundColor: '$background',
  padding: '$4',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
})

const SidebarItem = styled(Button, {
  marginBottom: '$2',
  borderRadius: '$2',
  backgroundColor: '$backgroundSecondary',
})

const SidebarText = styled(Text, {
  color: '$text',
})

type SidebarProps = {
  currentPath: string
  items: Array<{ label: string; path: string }>
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath, items }) => {
  const router = useRouter()
  const theme = useTheme()

  return (
    <SidebarContainer>
      {items.map((item) => {
        const isActive = currentPath === item.path
        return (
          <SidebarItem
            key={item.path}
            onPress={() => router.push(item.path)}
            backgroundColor={isActive ? theme.backgroundActive : theme.backgroundSecondary}
          >
            <SidebarText
              color={isActive ? theme.textActive : theme.text}
              fontWeight={isActive ? 'bold' : 'normal'}
            >
              {item.label}
            </SidebarText>
          </SidebarItem>
        )
      })}
    </SidebarContainer>
  )
}

export default Sidebar

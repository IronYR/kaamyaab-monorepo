import React from 'react'
import { YStack, Text, styled, useTheme } from 'tamagui'
import { useRouter, usePathname } from 'next/navigation'

const SidebarContainer = styled(YStack, {
  width: '15%',
  // backgroundColor: '$blue10',
  padding: '$4',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
})

const SidebarItem = styled(YStack, {
  marginBottom: '$2',
  padding: '$2',
  borderRadius: '$2',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'flex-start',
})

const SidebarText = styled(Text, {
  color: '$text',
})

type SidebarProps = {
  items: Array<{ label: string; path: string }>
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const router = useRouter()
  const pathname = usePathname()
  const theme = useTheme()

  const isActive = (itemPath: string) => {
    return pathname === itemPath || pathname.startsWith(`${itemPath}/`)
  }

  return (
    <SidebarContainer>
      {items.map((item) => {
        const active = isActive(item.path)
        return (
          <SidebarItem
            key={item.path}
            onPress={() => router.push(item.path)}
            backgroundColor={active ? '$blue8' : 'transparent'}
          >
            <Text
              color={active ? theme.textActive : theme.textMuted}
              fontWeight={active ? 'bold' : 'normal'}
              fontSize="$6"
            >
              {item.label}
            </Text>
          </SidebarItem>
        )
      })}
    </SidebarContainer>
  )
}

export default Sidebar

'use client'
import { useWindowDimensions } from 'react-native'
import { View, Button } from 'tamagui'
import { useRouter } from 'solito/navigation'

const DashboardLayout = ({ children }) => {
  const { width } = useWindowDimensions()
  const isMobile = width <= 768 // Adjust the breakpoint as needed
  const router = useRouter()

  const navigationTabs = [
    { name: 'Feed', route: '/dashboard/feed' },
    { name: 'Jobs', route: '/dashboard/jobs' },
    { name: 'Employers', route: '/dashboard/employers' },
    // Add more tabs as needed
  ]

  return (
    <View style={{ flexDirection: isMobile ? 'column' : 'row', height: '100vh' }}>
      {!isMobile && (
        <View
          style={{
            width: '15%',
            padding: 16,
          }}
        >
          {navigationTabs.map((tab) => (
            <View key={tab.name} style={{ marginBottom: 16 }}>
              <Button
                onPress={() => router.push(tab.route)}
                style={{ backgroundColor: 'transparent', textAlign: 'left' }}
              >
                {tab.name}
              </Button>
            </View>
          ))}
        </View>
      )}
      <View style={{ width: isMobile ? '100%' : '85%', padding: 16 }}>{children}</View>

      {isMobile && (
        <View
          style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            padding: 8,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          {navigationTabs.map((tab) => (
            <Button key={tab.name} onPress={() => router.push(tab.route)}>
              {tab.name}
            </Button>
          ))}
        </View>
      )}
    </View>
  )
}

export default DashboardLayout

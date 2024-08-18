import DashboardLayout from '@my/ui/src/DashboardLayout'
import { Text } from 'react-native'
import { TabsDemo } from '@my/ui/src/DashboardTabs'
import { Slot } from 'expo-router'

export default function Layout({ children }) {
  return (
    <DashboardLayout>
      <Slot />
    </DashboardLayout>
  )
}

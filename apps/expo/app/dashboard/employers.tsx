import { Paragraph, View, Text } from '@my/ui'
import { TabsDemo } from '@my/ui/src/DashboardTabs'
import { Stack } from 'expo-router'
export default function Employers() {
  return (
    <View>
      {/* <TabsDemo /> */}
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <Text>Hey?</Text>
      </View>
    </View>
  )
}

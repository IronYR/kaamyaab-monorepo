'use client'
import { Paragraph, View } from 'tamagui'
import JobScreen from 'app/screens/job/screen'
export default function page() {
  return (
    <View>
      <Paragraph>Jobs</Paragraph>
      <JobScreen />
    </View>
  )
}

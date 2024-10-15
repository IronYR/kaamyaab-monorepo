'use client'
import { View, H2 } from 'tamagui'
import Feed from '@my/ui/src/Feed'
export default function page() {
  return (
    <View>
      <H2>Posts</H2>
      <Feed />
    </View>
  )
}

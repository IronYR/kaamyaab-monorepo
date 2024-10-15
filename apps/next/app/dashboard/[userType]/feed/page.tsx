'use client'
import { View, H2, Button, XStack } from 'tamagui'
import { ChevronRight } from '@tamagui/lucide-icons'
import Feed from '@my/ui/src/Feed'
export default function page() {
  return (
    <View>
      <XStack justifyContent="space-between" p="$4">
        <H2>Posts</H2>
        <Button icon={<ChevronRight />} alignSelf="flex-start">
          Create New Post
        </Button>
      </XStack>

      <Feed />
    </View>
  )
}

import React from 'react'
import { Avatar, Button, Image, Paragraph, XStack, YStack, useMedia } from 'tamagui'

export function Post({ author, content, image, likes, comments, timeAgo }) {
  const media = useMedia()

  return (
    <YStack
      space="$2"
      padding="$4"
      borderRadius="$4"
      borderColor="$borderColor"
      borderWidth={1}
      backgroundColor="$background"
      maxWidth={600}
      width="100%"
      marginHorizontal="auto"
      {...(media.gtXs && {
        marginVertical: '$4',
      })}
    >
      <XStack space="$3" alignItems="center">
        <Avatar circular size="$6">
          <Avatar.Image src={author.avatarUrl} />
        </Avatar>
        <YStack>
          <Paragraph fontWeight="bold">{author.name}</Paragraph>
          <Paragraph size="$2" opacity={0.6}>
            {author.title} • {timeAgo}
          </Paragraph>
        </YStack>
      </XStack>

      <Paragraph>{content}</Paragraph>

      {image && (
        <Image
          source={{ uri: image.url }}
          alt={image.alt}
          width="100%"
          height={200}
          resizeMode="cover"
        />
      )}

      <XStack justifyContent="space-between" paddingTop="$2">
        <XStack space="$4">
          <Button icon="thumbs-up" variant="ghost">
            Like
          </Button>
          <Button icon="message-circle" variant="ghost">
            Comment
          </Button>
          <Button icon="repeat" variant="ghost">
            Repost
          </Button>
        </XStack>
      </XStack>

      <XStack space="$2">
        <Paragraph size="$2" opacity={0.6}>
          {likes} likes
        </Paragraph>
        <Paragraph size="$2" opacity={0.6}>
          •
        </Paragraph>
        <Paragraph size="$2" opacity={0.6}>
          {comments} comments
        </Paragraph>
      </XStack>
    </YStack>
  )
}

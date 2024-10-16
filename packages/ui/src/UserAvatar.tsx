import React from 'react'
import { Avatar, styled, XStack } from 'tamagui'

const StyledAvatar = styled(Avatar, {
  size: '$5',
  cursor: 'pointer',
})

const AvatarContainer = styled(XStack, {
  padding: '$2',
  borderRadius: '$full',
  // backgroundColor: '$background',
})

const UserAvatar = () => {
  // TODO: Replace with actual user data and image URL
  const userImageUrl =
    'https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png'
  const userName = 'John Doe'

  return (
    <AvatarContainer>
      <StyledAvatar circular size="$5">
        <Avatar.Image src={userImageUrl} />
        <Avatar.Fallback backgroundColor="$blue10" />
      </StyledAvatar>
    </AvatarContainer>
  )
}

export default UserAvatar

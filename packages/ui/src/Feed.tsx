import { Post } from '@my/ui/src/Post'
import { YStack, XStack, ScrollView } from 'tamagui'

export default function Feed() {
  const posts = [
    {
      id: '1',
      author: {
        name: 'Alex Johnson',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      content:
        'Just finished a great coding session. Nothing beats the feeling of solving a complex problem!',
      image:
        'https://images.unsplash.com/photo-1602661287394-ccf02e1a0893?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 42,
      comments: 7,
      timestamp: '2023-11-15T14:30:00Z',
    },
    {
      id: '2',
      author: {
        name: 'Sarah Lee',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      content: 'Exploring new JavaScript frameworks today. The tech world never stops evolving!',
      image:
        'https://images.unsplash.com/photo-1602661287394-ccf02e1a0893?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 38,
      comments: 5,
      timestamp: '2023-11-15T16:45:00Z',
    },
    {
      id: '3',
      author: {
        name: 'Mike Chen',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      },
      content:
        "Remember, clean code is not just about functionality, it's about readability and maintainability too!",
      image:
        'https://images.unsplash.com/photo-1602661287394-ccf02e1a0893?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 56,
      comments: 12,
      timestamp: '2023-11-15T18:20:00Z',
    },
    {
      id: '4',
      author: {
        name: 'Emma Wilson',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      },
      content:
        'Just deployed my first React Native app! Cross-platform development is a game-changer.',
      image:
        'https://images.unsplash.com/photo-1602661287394-ccf02e1a0893?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 71,
      comments: 9,
      timestamp: '2023-11-15T20:10:00Z',
    },
    {
      id: '5',
      author: {
        name: 'David Kim',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      },
      content:
        'Debugging: the process of removing bugs from your code. Also known as inserting different bugs into your code.',
      image:
        'https://images.unsplash.com/photo-1602661287394-ccf02e1a0893?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      likes: 89,
      comments: 15,
      timestamp: '2023-11-15T22:05:00Z',
    },
  ]
  return (
    <XStack justifyContent="center" width="100%">
      <ScrollView maxWidth={600} width="100%">
        {posts.map((post) => {
          return (
            <Post
              author={{
                name: post.author.name,
                title: 'PhD Candidate',
                avatarUrl:
                  'https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png',
              }}
              content={post.content}
              image={{
                url: post.image,
                alt: 'Internship completion certificate',
              }}
              likes={post.likes}
              comments={post.comments}
              timeAgo={post.timestamp}
            />
          )
        })}

        {/* More posts... */}
      </ScrollView>
    </XStack>
  )
}

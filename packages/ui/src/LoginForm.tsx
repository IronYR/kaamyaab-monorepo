'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { YStack, Input, Button, Text, Form } from 'tamagui'
import { Toast, useToastController, useToastState } from '@tamagui/toast'
import useUserInfo from '@my/ui/hooks/useUserInfo'
export default function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  // const toast = useToastController()
  // const currentToast = useToastState()

  const handleSubmit = async () => {
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (res.ok) {
        // toast.show('Logged in successfully!', {
        //   type: 'success',
        // })
        router.push(`/dashboard/${data.role}/home`)
      } else {
        // toast.show(data.msg || 'Login failed', {
        //   type: 'error',
        // })
        console.log('failure')
      }
    } catch (err) {
      // toast.show('An unexpected error occurred.', {
      //   type: 'error',
      // })
    } finally {
      setLoading(false)
    }
  }

  return (
    <YStack
      width={400}
      p="$6"
      space="$4"
      borderRadius="$4"
      borderWidth={1}
      borderColor="$borderColor"
      background="$backgroundStrong"
    >
      <Text fontSize="$8" fontWeight="bold" ta="center">
        Login
      </Text>
      <Text fontSize="$3" color="$gray10" ta="center">
        Enter your email below to login to your account.
      </Text>
      <Form onSubmit={handleSubmit}>
        <YStack space="$4">
          <Input
            size="$4"
            borderWidth={1}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            size="$4"
            borderWidth={1}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Form.Trigger asChild>
            <Button themeInverse size="$4" fontWeight="600" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </Form.Trigger>
        </YStack>
      </Form>
      {/* {currentToast && (
        <Toast
          key={currentToast.id}
          duration={2000}
          enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
          exitStyle={{ opacity: 0, scale: 1, y: -20 }}
          y={0}
          opacity={1}
          scale={1}
          animation="quick"
        >
          <Toast.Title>{currentToast.title}</Toast.Title>
        </Toast>
      )} */}
    </YStack>
  )
}

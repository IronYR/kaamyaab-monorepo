'use client'
import { YStack } from 'tamagui'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import LoginForm from '@my/ui/src/LoginForm'

export default function LoginPage() {
  return (
    <ToastProvider>
      <YStack f={1} ai="center" jc="center" bg="$background">
        <LoginForm />
        <ToastViewport />
      </YStack>
    </ToastProvider>
  )
}

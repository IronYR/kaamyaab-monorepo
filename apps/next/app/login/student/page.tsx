'use client'
import { YStack } from 'tamagui'
import { ToastProvider, ToastViewport } from '@tamagui/toast'
import LoginForm from '@my/ui/src/LoginForm'
import dynamic from 'next/dynamic'

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

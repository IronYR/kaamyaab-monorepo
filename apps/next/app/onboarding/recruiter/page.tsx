'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Form, Input, YStack, Text, XStack, styled } from 'tamagui'

const StyledInput = styled(Input, {
  backgroundColor: '$gray1',
  borderWidth: 1,
  borderColor: '$gray5',
  height: 40,
  paddingLeft: 10,
  marginBottom: 10,
})

const StyledButton = styled(Button, {
  backgroundColor: '$gray1',
  color: '$gray12',
  borderWidth: 1,
  borderColor: '$gray5',
  height: 40,
})

export default function RecruiterSignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/recruiter/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, company }),
      })

      if (response.ok) {
        router.push('/login')
      } else {
        const data = await response.json()
        setError(data.message || 'An error occurred during registration')
      }
    } catch (err) {
      setError('An error occurred during registration')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <YStack f={1} ai="center" jc="center" p="$4">
      <YStack
        width={450}
        padding="$4"
        p="$6"
        space="$4"
        borderRadius="$4"
        borderWidth={1}
        borderColor="$borderColor"
        background="$backgroundStrong"
      >
        <Text fontSize="$6" fontWeight="bold" color="$gray12" marginBottom="$2">
          Sign Up
        </Text>
        <Text fontSize="$3" color="$gray11" marginBottom="$4">
          Enter your information to create an account
        </Text>
        <Form onSubmit={handleSubmit} space>
          <XStack space>
            {/* <StyledInput
              flex={1}
              placeholder="First name"
              value={name.split(' ')[0]}
              onChangeText={(text) => setName(text + ' ' + name.split(' ')[1])}
              autoCapitalize="words"
            /> */}
            <StyledInput
              flex={1}
              placeholder="Full name"
              value={name || ''}
              onChangeText={(text) => setName(text)}
              autoCapitalize="words"
            />
          </XStack>
          <StyledInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <StyledInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <StyledInput
            placeholder="Company"
            value={company}
            onChangeText={setCompany}
            autoCapitalize="words"
          />
          <StyledButton onPress={handleSubmit} disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create an account'}
          </StyledButton>
        </Form>
        {error && (
          <Text color="$red10" fontSize="$3" marginTop="$2">
            {error}
          </Text>
        )}
        <XStack space justifyContent="center" marginTop="$4">
          <Text color="$gray11">Already have an account?</Text>
          <Text color="$blue10" onPress={() => router.push('/login')} cursor="pointer">
            Sign in
          </Text>
        </XStack>
      </YStack>
    </YStack>
  )
}

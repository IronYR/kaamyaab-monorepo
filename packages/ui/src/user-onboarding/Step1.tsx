'use client'
import { Input, Button, YStack,H1 } from '@my/ui'

export default function Step1({ formData, setFormData }) {
  return (
    <YStack>
      <H1 mb="$5">Let's find your next job</H1>
      <Input
        size="$5"
        placeholder="Your name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        style={{ marginBottom: 20 }}
      />
      <Input
        size="$5"
        placeholder="Your .edu email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        style={{ marginBottom: 20 }}
      />
    </YStack>
  )
}

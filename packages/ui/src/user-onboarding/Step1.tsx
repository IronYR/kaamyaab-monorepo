'use client'
import { Input, Button,YStack } from '@my/ui'

export default function Step1({ formData, setFormData }) {
  return (
    <YStack>
      <Input
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        style={{ marginBottom: 20 }}
      />
      <Input
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        style={{ marginBottom: 20 }}
      />
    </YStack>
  )
}

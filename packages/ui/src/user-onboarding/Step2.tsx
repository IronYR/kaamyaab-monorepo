'use client'
import React from 'react'
import { Input, Button, YStack, H1 } from '@my/ui'

export default function Step2({ formData, setFormData }) {
  return (
    <YStack>
      <H1 mb="$5">Create a secure password</H1>
      <Input
        size="$5"
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        style={{ marginBottom: 20 }}
      />
    </YStack>
  )
}

'use client'
import React from 'react'
import { Input, Button, YStack } from '@my/ui'

export default function Step2({ formData, setFormData }) {
  return (
    <YStack>
      <Input
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        style={{ marginBottom: 20 }}
      />
      <Input
        placeholder="University"
        value={formData.university}
        onChangeText={(text) => setFormData({ ...formData, university: text })}
        style={{ marginBottom: 20 }}
      />
    </YStack>
  )
}

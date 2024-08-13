'use client'
import React from 'react'
import { Input, Button, YStack } from '@my/ui'

export default function Step3({ formData, setFormData }) {
  return (
    <YStack>
      <Input
        size="$5"
        placeholder="Degree"
        value={formData.degree}
        onChangeText={(text) => setFormData({ ...formData, degree: text })}
        style={{ marginBottom: 20 }}
      />
      <Input
        size="$5"
        placeholder="Skills"
        value={formData.skills}
        onChangeText={(text) => setFormData({ ...formData, skills: text })}
        style={{ marginBottom: 20 }}
      />
    </YStack>
  )
}

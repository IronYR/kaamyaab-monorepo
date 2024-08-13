'use client'
import React from 'react'
import { Input, Button, YStack } from '@my/ui'

export default function Step3({ formData, setFormData }) {
  return (
    <YStack>
      <Input
        placeholder="Degree"
        value={formData.degree}
        onChangeText={(text) => setFormData({ ...formData, degree: text })}
        style={{ marginBottom: 20 }}
      />
      <Input
        placeholder="Skills"
        value={formData.skills}
        onChangeText={(text) => setFormData({ ...formData, skills: text })}
        style={{ marginBottom: 20 }}
      />
    </YStack>
  )
}

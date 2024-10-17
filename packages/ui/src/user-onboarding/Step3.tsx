'use client'
import React from 'react'
import { Input, Button, YStack, H1 } from '@my/ui'

export default function Step3({ formData, setFormData }) {
  return (
    <YStack>
      <H1 mb="$5">Tell us about your education</H1>
      <Input
        size="$5"
        placeholder="University"
        value={formData.university}
        onChangeText={(text) => setFormData({ ...formData, university: text })}
        style={{ marginBottom: 20 }}
      />
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

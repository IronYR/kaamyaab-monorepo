'use client'
import React, { useState } from 'react'
import { XStack, View } from '@my/ui'
import StepOne from '@my/ui/src/user-onboarding/Step1'
import StepTwo from '@my/ui/src/user-onboarding/Step2'
import StepThree from '@my/ui/src/user-onboarding/Step3'
import { Button } from 'tamagui'
import { ProgressComponent } from '@my/ui/src/ProgressComponent'
import { useRouter } from 'next/navigation'

const Steps = () => {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    university: '',
    degree: '',
    skills: '',
    // more fields...
  })
  // Calculate progress based on the current step
  const [progress, setProgress] = useState(20)
  // const progress = 0.5 * 100 // Assuming 4 steps total (0-3)
  const nextStep = () => {
    setStep(step + 1)
    setProgress(progress + 0.33 * progress)
  }
  const prevStep = () => {
    setStep(step - 1)
    setProgress(progress - 0.33 * progress)
  }

  function renderStep() {
    switch (step) {
      case 0:
        return <StepOne formData={formData} setFormData={setFormData} />
      case 1:
        return <StepTwo formData={formData} setFormData={setFormData} />
      case 2:
        return <StepThree formData={formData} setFormData={setFormData} />
      // default:
      //   return <Review formData={formData} />
    }
  }

  async function registerUser() {
    try {
      const response = await fetch(`/api/student/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/login')
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Registration failed')
      }
    } catch (err) {
      console.error('Error:', err.message || err)
    }
  }
  return (
    <View>
      <ProgressComponent progress={progress} />
      {renderStep()}
      <XStack gap="$5" justifyContent="space-between">
        {step > 0 && <Button onPress={prevStep}>Previous</Button>}
        {step < 3 && step != 2 && <Button onPress={nextStep}>Next</Button>}
        {step == 2 && <Button onPress={registerUser}>Submit</Button>}
      </XStack>
    </View>
  )
}

export default Steps

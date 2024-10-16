import React, { useState } from 'react'
import { Platform } from 'react-native'
import { useRouter } from 'next/navigation'
import useUserInfo from '../hooks/useUserInfo'
import {
  Dialog,
  Button,
  Input,
  Label,
  YStack,
  XStack,
  Select,
  ScrollView,
  styled,
  TextArea,
  Popover,
} from 'tamagui'

const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship']

const StyledContent = styled(Dialog.Content, {
  maxWidth: 600,
  maxHeight: 700,
  width: '90%',
  overflow: 'hidden',
  borderRadius: 10,
  padding: 0,
})

const CustomSelect = ({ value, onValueChange, options }) => {
  if (Platform.OS !== 'web') {
    return (
      <Select id="employmentType" value={value} onValueChange={onValueChange}>
        <Select.Trigger width="100%" id="employmentType">
          <Select.Value placeholder="Select type" />
        </Select.Trigger>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            {options.map((option, index) => (
              <Select.Item key={option} index={index} value={option}>
                <Select.ItemText>{option}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select>
    )
  }

  return (
    <Popover placement="bottom">
      <Popover.Trigger asChild>
        <Button>{value || 'Select type'}</Button>
      </Popover.Trigger>
      <Popover.Content>
        <YStack padding="$2">
          {options.map((option) => (
            <Button
              key={option}
              onPress={() => onValueChange(option)}
              theme={value === option ? 'active' : undefined}
              m="$2"
            >
              {option}
            </Button>
          ))}
        </YStack>
      </Popover.Content>
    </Popover>
  )
}

export const CreateJobPostingModal = ({ open, onOpenChange }) => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    employmentType: '',
    description: '',
    salaryRange: '',
    requirements: '',
  })

  const { user, jwt, loading, error } = useUserInfo()

  const router = useRouter()
  if (loading) return <div>Loading user info...</div>
  if (error) return <div>Error: {error}</div>

  const handleInputChange = (name: string, value: string) => {
    setJobData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    try {
      console.log('Job posting data:', jobData)

      if (!user || !user.id || !jwt) {
        throw new Error('User is not authenticated or missing required data.')
      }

      const response = await fetch(`/api/recruiter/${user.id}/jobListing`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(jobData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error uploading job description:', errorData)
        throw new Error('Failed to upload job description.')
      }

      // Redirect to the dashboard upon successful submission
      router.push('/dashboard/recruiter/job-postings')
      onOpenChange(false) // Close the modal or component
    } catch (error) {
      console.error('Error in handleSubmit:', error instanceof Error ? error.message : error)
      alert('An error occurred while submitting the job description. Please try again.')
    }
  }

  return (
    <Dialog modal open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <StyledContent
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <Dialog.Title padding="$4">Create New Job Posting</Dialog.Title>
          <ScrollView>
            <YStack space="$4" padding="$4">
              <XStack space="$4">
                <YStack flex={1}>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={jobData.title}
                    onChangeText={(text) => handleInputChange('title', text)}
                  />
                </YStack>
                <YStack flex={1}>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={jobData.company}
                    onChangeText={(text) => handleInputChange('company', text)}
                  />
                </YStack>
              </XStack>
              <XStack space="$4">
                <YStack flex={1}>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={jobData.location}
                    onChangeText={(text) => handleInputChange('location', text)}
                  />
                </YStack>
                <YStack flex={1}>
                  <Label htmlFor="employmentType">Employment Type</Label>
                  <CustomSelect
                    value={jobData.employmentType}
                    onValueChange={(value) => handleInputChange('employmentType', value)}
                    options={employmentTypes}
                  />
                </YStack>
              </XStack>
              <YStack>
                <Label htmlFor="description">Description</Label>
                <TextArea
                  id="description"
                  value={jobData.description}
                  onChangeText={(text) => handleInputChange('description', text)}
                />
              </YStack>
              <YStack>
                <Label htmlFor="salaryRange">Salary Range (Optional)</Label>
                <Input
                  id="salaryRange"
                  value={jobData.salaryRange}
                  onChangeText={(text) => handleInputChange('salaryRange', text)}
                />
              </YStack>
              <YStack>
                <Label htmlFor="requirements">Requirements</Label>
                <TextArea
                  id="requirements"
                  value={jobData.requirements}
                  onChangeText={(text) => handleInputChange('requirements', text)}
                />
              </YStack>
            </YStack>
          </ScrollView>
          <Dialog.Close asChild>
            <XStack
              space="$4"
              justifyContent="flex-end"
              padding="$4"
              borderTopWidth={1}
              borderColor="$borderColor"
            >
              <Button onPress={() => onOpenChange(false)}>Cancel</Button>
              <Button theme="active" onPress={handleSubmit}>
                Submit
              </Button>
            </XStack>
          </Dialog.Close>
        </StyledContent>
      </Dialog.Portal>
    </Dialog>
  )
}

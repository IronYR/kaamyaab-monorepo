import { Paragraph, Progress, YStack } from '@my/ui'

export const ProgressComponent = ({ progress }) => {
  return (
    <YStack height={60} alignItems="center" gap="$4">

      <Progress size={4} value={progress}>
        <Progress.Indicator animation="bouncy" background="blue" />
      </Progress>
    </YStack>
  )
}

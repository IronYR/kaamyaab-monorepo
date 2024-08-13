'use client'
import { YStack, XStack, View, Text, MyComponent, Separator, H1 } from '@my/ui'
import StepCard from '@my/ui/src/StepCard'
const Onboard = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Onboarding</Text>
      </View>
      <StepCard>{children}</StepCard>
    </View>
  )
}

export default Onboard

import { View, Text } from 'tamagui'

const StepCard = ({ children }) => {
  return (
    <View
      style={{
        width: '100%',
        maxWidth: 400,
        padding: 20,
        borderRadius: 10,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      {children}
    </View>
  )
}

export default StepCard

import Onboard from 'app/screens/onboarding'
import Steps from 'app/screens/onboarding/steps'
import { Slot } from 'expo-router'

export default function Lay({ children }) {
  return (
    <Onboard>
      <Slot />
    </Onboard>
  )
}

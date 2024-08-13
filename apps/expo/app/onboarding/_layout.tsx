import Onboard from 'app/screens/onboarding'
import Steps from 'app/screens/onboarding/steps'
export default function Lay({ children }) {
  return (
    <Onboard>
      {children}
      <Steps />
    </Onboard>
  )
}

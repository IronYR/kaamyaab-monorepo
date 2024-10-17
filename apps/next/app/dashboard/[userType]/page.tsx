import { redirect } from 'next/navigation'

export default function DashboardPage({ params }: { params: { userType: string } }) {
  redirect(`/dashboard/${params.userType}/home`)
}

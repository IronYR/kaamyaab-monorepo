type SidebarItem = {
  label: string
  path: string
}

export const getSidebarItemsForUserType = (userType: string): SidebarItem[] => {
  const commonItems: SidebarItem[] = [
    { label: 'Home', path: `/dashboard/${userType}/home` },
    { label: 'Events', path: `/dashboard/${userType}/events` },
    { label: 'Feed', path: `/dashboard/${userType}/feed` },
  ]

  switch (userType) {
    case 'student':
      return [
        ...commonItems,
        { label: 'Jobs', path: '/dashboard/student/jobs' },
        { label: 'Career Center', path: '/dashboard/student/career-center' },
      ]
    case 'recruiter':
      return [
        ...commonItems,
        { label: 'Candidates', path: '/dashboard/recruiter/candidates' },
        { label: 'Job Postings', path: '/dashboard/recruiter/job-postings' },
      ]
    case 'university':
      return [
        ...commonItems,
        { label: 'Students', path: '/dashboard/university/students' },
        { label: 'Employers', path: '/dashboard/university/employers' },
        { label: 'Analytics', path: '/dashboard/university/analytics' },
      ]
    default:
      return commonItems
  }
}

type SidebarItem = {
  label: string
  path: string
}

export const getSidebarItemsForUserType = (userType: string): SidebarItem[] => {
  const commonItems: SidebarItem[] = [
    { label: 'Home', path: '/dashboard/home' },
    { label: 'Events', path: '/dashboard/events' },
    { label: 'Feed', path: '/dashboard/feed' },
  ]

  switch (userType) {
    case 'student':
      return [
        ...commonItems,
        { label: 'Jobs', path: '/dashboard/jobs' },
        { label: 'Career Center', path: '/dashboard/career-center' },
      ]
    case 'recruiter':
      return [
        ...commonItems,
        { label: 'Candidates', path: '/dashboard/candidates' },
        { label: 'Job Postings', path: '/dashboard/job-postings' },
      ]
    case 'university':
      return [
        ...commonItems,
        { label: 'Students', path: '/dashboard/students' },
        { label: 'Employers', path: '/dashboard/employers' },
        { label: 'Analytics', path: '/dashboard/analytics' },
      ]
    default:
      return commonItems
  }
}

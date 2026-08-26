type BadgeProps = {
  status: string
}

function Badge({ status }: BadgeProps) {
  const className = status === 'For Rent' ? 'badge badge-for-rent' : 'badge'

  return <span className={className}>{status}</span>
}

export default Badge

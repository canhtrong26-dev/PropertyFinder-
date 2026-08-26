type BadgeProps = {
  status: string
}

function Badge({ status }: BadgeProps) {
  return <span>{status}</span>
}

export default Badge
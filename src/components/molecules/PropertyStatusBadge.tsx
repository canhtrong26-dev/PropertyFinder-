import Badge from '../atoms/Badge'

type PropertyStatusBadgeProps = { status: string }

function PropertyStatusBadge({ status }: PropertyStatusBadgeProps) {
  return (
    <div>
      <Badge status={status} />
    </div>
  )
}

export default PropertyStatusBadge

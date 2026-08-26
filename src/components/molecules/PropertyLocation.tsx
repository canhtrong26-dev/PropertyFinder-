import Icon from '../atoms/Icon'
import Text from '../atoms/Text'

type PropertyLocationProps = { region: string }

function PropertyLocation({ region }: PropertyLocationProps) {
  return (
    <div className="property-card-location">
      <Icon name="location" />
      <Text variant="caption">{region}</Text>
    </div>
  )
}

export default PropertyLocation

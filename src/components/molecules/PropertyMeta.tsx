import Icon from '../atoms/Icon'
import Text from '../atoms/Text'

type PropertyMetaProps = {
  beds: number
  baths: number
}

function PropertyMeta({ beds, baths }: PropertyMetaProps) {
  return (
    <div>
      <div>
        <Icon name="bed" />
        <Text variant="caption">{`${beds} beds`}</Text>
      </div>
      <div>
        <Icon name="bath" />
        <Text variant="caption">{`${baths} baths`}</Text>
      </div>
    </div>
  )
}

export default PropertyMeta
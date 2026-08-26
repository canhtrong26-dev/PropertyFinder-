type IconProps = {
  name: string
}

function Icon({ name }: IconProps) {
  return <span>{name}</span>
}

export default Icon
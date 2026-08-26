type IconProps = {
  name: string
}

const icons: Record<string, string> = {
  location: '📍',
  bed: '🛏',
  bath: '🛁',
}

function Icon({ name }: IconProps) {
  return <span className="icon">{icons[name] ?? name}</span>
}

export default Icon

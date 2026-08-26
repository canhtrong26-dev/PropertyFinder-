type TagProps = {
  label: string
}

function Tag({ label }: TagProps) {
  return <span>{label}</span>
}

export default Tag
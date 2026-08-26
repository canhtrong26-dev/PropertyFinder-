type TextProps = {
  children: string
  variant: string
}

function Text({ children, variant }: TextProps) {
  return <p className={variant}>{children}</p>
}

export default Text
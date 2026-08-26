type ButtonProps = {
  children: string
  variant: 'primary' | 'outline'
}

function Button({ children, variant }: ButtonProps) {
  return <button className={variant}>{children}</button>
}

export default Button
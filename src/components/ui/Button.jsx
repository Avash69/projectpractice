export default function Button({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const variantClass = variant === 'primary' ? 'btnPrimary' : ''
  return (
    <button className={`btn ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}


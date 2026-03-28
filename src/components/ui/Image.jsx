export default function Image({ alt = '', className = '', ...props }) {
  return <img alt={alt} className={className} loading="lazy" decoding="async" {...props} />
}


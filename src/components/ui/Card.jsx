import { createElement } from 'react'

export default function Card({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) {
  return createElement(
    Component,
    { className: `card ${className}`.trim(), ...props },
    children,
  )
}


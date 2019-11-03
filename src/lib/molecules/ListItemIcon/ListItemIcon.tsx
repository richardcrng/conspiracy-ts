import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import { List } from 'antd-mobile';

type IconIdentifier = string | IconType | { ios: string, md: string }

interface Props {
  children?: React.ReactNode
  icon?: IconIdentifier
  lines?: "full" | "inset" | "none"
}

function ListItemIcon({ children, icon, lines } : Props) {
  return (
    <List.Item extra={icon ? <Icon icon={icon} /> : null}>
      {children}
    </List.Item>
  )
}

function Icon({ icon: IconProp } : { icon: IconIdentifier }) {
  if (typeof IconProp === 'function') {
    return (
      <span data-testid='icon-of-ListItemIcon' slot='end'>
        <IconProp />
      </span>
    )
  } else {
    return null
  }
}

export default ListItemIcon;
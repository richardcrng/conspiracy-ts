import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import { List } from 'antd-mobile';

interface Props {
  children?: React.ReactNode
  icon?: IconType | React.FunctionComponent | undefined
}

function ListItemIcon({ children, icon } : Props) {
  return (
    <List.Item extra={icon ? <Icon icon={icon} /> : null}>
      {children}
    </List.Item>
  )
}

function Icon({ icon: IconProp }: { icon: IconType | React.FunctionComponent }) {
  return (
    <span data-testid='icon-of-ListItemIcon' slot='end'>
      {
        typeof IconProp === 'function'
          ? <IconProp />
          : {IconProp}
      }
    </span>
  )
}

export default ListItemIcon;
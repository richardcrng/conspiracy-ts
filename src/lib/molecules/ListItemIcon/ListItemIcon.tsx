import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import { List } from 'antd-mobile';

interface Props<T = any> {
  children?: React.ReactNode
  icon?: IconType | React.FunctionComponent | undefined
  onClickDatum?: T
  onClick?(event?: React.MouseEvent, datum?: T): void
  thumb?: React.ReactNode
}

function ListItemIcon<T = any>({ children, icon, onClick, onClickDatum, thumb } : Props<T>) {
  return (
    <List.Item
      extra={icon ? <Icon icon={icon} /> : null}
      onClick={(e) => {
        onClick && onClick(e, onClickDatum)
      }}
      thumb={thumb}
    >
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
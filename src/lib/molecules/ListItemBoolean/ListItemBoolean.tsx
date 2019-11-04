import * as R from 'ramda'
import React, { ReactNode } from 'react';
import ListItemIcon from '../ListItemIcon';
import { IoMdCheckboxOutline } from 'react-icons/io'
import { IconType } from 'react-icons/lib/cjs';

interface Props {
  boolean?: boolean
  children?: ReactNode
  icon?: IconType
  lines?: "full" | "inset" | "none"
}

function ListItemBoolean({ boolean, children, icon, lines } : Props) {
  const iconToUse = R.defaultTo(IoMdCheckboxOutline, icon)
  return (
    <ListItemIcon icon={boolean ? iconToUse : undefined} lines={lines}>
      {children}
    </ListItemIcon>
  )
}

export default ListItemBoolean;
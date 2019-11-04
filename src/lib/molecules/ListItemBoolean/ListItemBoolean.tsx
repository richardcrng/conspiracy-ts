import * as R from 'ramda'
import React from 'react';
import ListItemIcon from '../ListItemIcon';
import { IoMdCheckboxOutline } from 'react-icons/io'
import { IconType } from 'react-icons/lib/cjs';

interface Props {
  boolean?: boolean
  children?: React.ReactNode
  icon?: IconType | React.FunctionComponent
}

function ListItemBoolean({ boolean, children, icon } : Props) {
  const iconToUse = R.defaultTo(IoMdCheckboxOutline, icon)
  return (
    <ListItemIcon icon={boolean ? iconToUse : undefined}>
      {children}
    </ListItemIcon>
  )
}

export default ListItemBoolean;
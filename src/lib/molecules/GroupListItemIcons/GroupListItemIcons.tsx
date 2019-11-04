import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import ListItemIcon from '../ListItemIcon';

interface Props {
  data: React.ReactNode[]
  icon?: IconType | React.FunctionComponent
}

function GroupListItemIcons({ data, icon }: Props) {
  return (
    <>
      {
        data.map((children, index) => (
          <ListItemIcon
            key={String(children) + String(index)}
            icon={icon}
          >
            {children}
          </ListItemIcon>
        ))
      }
    </>
  )
}

export default GroupListItemIcons;
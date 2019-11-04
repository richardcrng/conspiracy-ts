import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import ListItemIcon from '../ListItemIcon';

interface Props {
  data: React.ReactNode[]
  icon?: IconType | React.FunctionComponent
  ids?: (string | number)[]
}

function GroupListItemIcons({ data, icon, ids }: Props) {
  return (
    <>
      {
        data.map((children, index) => (
          <ListItemIcon
            key={ids && ids[index] ? ids[index] : String(children) + String(index)}
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
import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import ListItemIcon from '../ListItemIcon';

interface Props<T = any> {
  data: React.ReactNode[]
  icon?: IconType | React.FunctionComponent
  icons?: (IconType | React.FunctionComponent)[]
  ids?: (string | number)[]
  onItemClick? (event?: React.MouseEvent, itemOnClickDatum?: T): void
  onItemClickData?: T[]
}

function GroupListItemIcons<T = any>({ data, icon, icons = [], ids = [], onItemClick, onItemClickData = [] }: Props<T>) {
  const iconArray = icon
    ? Array(data.length).fill(icon)
    : icons

  return (
    <>
      {
        data.map((children, index) => (
          <ListItemIcon<T>
            key={ids[index] ? ids[index] : String(children) + String(index)}
            icon={iconArray[index]}
            onClickDatum={onItemClickData[index]}
            onClick={onItemClick}
          >
            {children}
          </ListItemIcon>
        ))
      }
    </>
  )
}

export default GroupListItemIcons;
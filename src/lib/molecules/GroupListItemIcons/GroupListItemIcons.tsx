import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import ListItemIcon from '../ListItemIcon';

interface Props<T = any> {
  data: React.ReactNode[]
  icon?: IconType | React.FunctionComponent
  ids?: (string | number)[]
  onItemClick? (event?: React.MouseEvent, itemOnClickDatum?: T): void
  onItemClickData?: T[]
}

function GroupListItemIcons<T = any>({ data, icon, ids, onItemClick, onItemClickData }: Props<T>) {
  return (
    <>
      {
        data.map((children, index) => (
          <ListItemIcon<T>
            key={ids && ids[index] ? ids[index] : String(children) + String(index)}
            icon={icon}
            onClickDatum={onItemClickData ? onItemClickData[index] : undefined}
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
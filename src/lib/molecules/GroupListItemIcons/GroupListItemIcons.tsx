import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import ListItemIcon from '../ListItemIcon';

interface Props<T = any> {
  nodes: React.ReactNode[]
  icon?: IconType | React.FunctionComponent
  icons?: (IconType | React.FunctionComponent)[]
  ids?: (string | number)[]
  onItemClick? (event?: React.MouseEvent, itemOnClickDatum?: T): void
  onItemClicks?: ((event?: React.MouseEvent, itemOnClickDatum?: T) => void)[]
  onItemClickData?: T[]
  thumb?: React.ReactNode
  thumbs?: React.ReactNode[]
}

function GroupListItemIcons<T = any>({ nodes, icon, icons = [], ids = [], onItemClick, onItemClicks = [], onItemClickData = [], thumb, thumbs = [] }: Props<T>) {

  return (
    <>
      {
        nodes.map((children, index) => (
          <ListItemIcon<T>
            key={ids[index] ? ids[index] : String(children) + String(index)}
            icon={icon ? icon : icons[index]}
            onClickDatum={onItemClickData[index]}
            onClick={onItemClick ? onItemClick : onItemClicks[index]}
            thumb={thumb ? thumb : thumbs[index]}
          >
            {children}
          </ListItemIcon>
        ))
      }
    </>
  )
}

export default GroupListItemIcons;
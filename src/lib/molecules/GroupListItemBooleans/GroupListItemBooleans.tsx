import React from 'react';
import ListItemBoolean from '../ListItemBoolean';
import { IconType } from 'react-icons/lib/cjs';

interface Props {
  data: [React.ReactNode, boolean][]
  icon?: IconType | React.FunctionComponent
}

function GroupListItemBooleans({ data, icon }: Props) {
  return (
    <>
      {
        data.map(([children, boolean], index) => (
          <ListItemBoolean
            key={String(children) + String(index)}
            boolean={boolean}
            icon={icon}
          >
            {children}
          </ListItemBoolean>
        ))
      }
    </>
  )
}

export default GroupListItemBooleans;
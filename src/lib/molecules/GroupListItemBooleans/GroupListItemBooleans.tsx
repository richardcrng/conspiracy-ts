import React, { ReactNode } from 'react';
import ListItemBoolean from '../ListItemBoolean';

interface Props {
  data: [ReactNode, boolean][]
  icon?: { ios: string, md: string }
  lines?: "full" | "inset" | "none"
}

function GroupListItemBooleans({ data, icon, lines } : Props) {
  return (
    <>
      {
        data.map(([children, boolean], index) => (
          <ListItemBoolean
            key={String(children) + String(index)}
            boolean={boolean}
            icon={icon}
            lines={lines}
          >
            {children}
          </ListItemBoolean>
        ))
      }
    </>
  )
}

export default GroupListItemBooleans;
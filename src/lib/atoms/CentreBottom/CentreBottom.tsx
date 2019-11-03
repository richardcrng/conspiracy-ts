import React from 'react'
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const CentreBottom : React.FC<Props> = styled.div`
  justify-content: center;
  margin: 10px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 10px;
`

export default CentreBottom;
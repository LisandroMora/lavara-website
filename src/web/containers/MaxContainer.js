import styled from '@emotion/styled'
import React from 'react'

const MaxContainerS = styled.div`
  padding: 0 30px;
  max-width: 1490px;
  width: 100%;
  margin: 0 auto;
`

function MaxContainer({ children }) {
  return (
    <MaxContainerS>
      {children}
    </MaxContainerS>
  )
}

export default MaxContainer
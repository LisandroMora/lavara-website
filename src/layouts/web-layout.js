import styled from '@emotion/styled'
import React, { Fragment, useEffect, useState } from 'react'
import FollowCursor from 'src/components/FollowCursor/Index'
import Footer from 'src/components/Footer/Index'
import Nav from 'src/components/Nav/Index'
import GlobalStyle from 'src/styles/GlobalStyle'

const LayoutContainer = styled.div`
  margin-top: 130px;

  @media (max-width: 768px) {
	margin-top: 80px;
  }
`

function WebLayout({ children }) {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		if (window.innerWidth < 768) {
			setIsMobile(true)
		}
	}, [])
  return (
	<LayoutContainer>
		<GlobalStyle />
		{!isMobile && <FollowCursor />}
		<Nav />
		{children}
		<Footer />
	</LayoutContainer>
  )
}

export default WebLayout

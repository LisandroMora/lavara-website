import styled from '@emotion/styled'

export const Dashboard = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: max-content 1fr 1fr;
	grid-template-rows: max-content 1fr;
	grid-template-areas:
		'sidebar topNav topNav'
		'sidebar view view';
	min-height: 100vh;

	.sidebar-container {
		grid-area: sidebar;
	}

	.top-nav-container {
		grid-area: topNav;
		height: 80px;
	}

	.view-container {
		grid-area: view;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
`

export const ViewLayoutContainer = styled.div`
	position: relative;
`

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fade = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const width = keyframes`
	from {
		width: 0;
	}
	to {
		width: 300px;
	}
`;

export const StyledMainBanner = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	background-image: url('/assets/images/main-banner2.jpg');
	background-size: cover;
	background-position: center right;
	background-attachment: fixed;
	min-height: 80vh;

	.title {
		position: absolute;
		top: 50%;
		left: 50px;
		transform: translateY(-50%);
		color: white;
		max-width: 50%;
		
		p{
			opacity: 0;
			font-size: clamp(3.5rem, 12vw, 12.5rem);
			font-weight: 100;
			line-height: 0.8;
			transition: all 0.5s;
			text-transform: uppercase;

			&:nth-of-type(1){
				animation: ${fade} 1.5s ease forwards;
			}
			&:nth-of-type(2){
				animation: ${fade} 1.5s ease .5s forwards;
			}
			&:nth-of-type(3){
				animation: ${fade} 1.5s ease 1s forwards;
			}
			&:nth-of-type(4){
				animation: ${fade} 1.5s ease 1.5s forwards;
				font-size: clamp(2rem, 6vw, 6rem);
			}
		}
	}

	.label-banner {
		position: absolute;
		bottom: 50px;
		right: 5%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		color: white;
		font-size: 24px;
		font-weight: 100;
		background-color: var(--secondary-bg-color);
		/* padding: 20px 25px; */
		height: 78px;
		animation: ${width} 2s ease forwards;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: -20px;
			width: 20px;
			height: 100%;
			background-color: var(--tertiary-bg-color);
			z-index: 2;
		}

		span {
			width: 100%;
			font-family: 'Avenir';
			font-size: 18px;
			line-height: .8;
			padding-left: 20px;
			opacity: 0;

			&:nth-of-type(1){
				font-weight: 900;
				animation: ${fade} 1s ease 1.5s forwards;
			}

			&:nth-of-type(2){
				font-weight: 100;
				animation: ${fade} 1s ease 2s forwards;
			}
		}
	}

	@media (max-width: 768px){
		margin: 0;
		background-image: url('/assets/images/main-banner-mobile.jpg');
		background-position: center right;
		background-attachment: scroll;
		max-height: 35vh;
		height: 100%;
		min-height: 380px;


		.title {
			top: 30px;
			left: 30px;
			transform: none;
			max-width: 50%;
		}

		.label-banner {
			bottom: auto;
			right: auto;
			left: 40px;
			top: 250px;
			font-size: 14px;
			padding: 10px 15px;

			&::before {
				width: 10px;
				left: -10px;
			}

			span {
				font-size: 14px;
			}
		}
	}
`;
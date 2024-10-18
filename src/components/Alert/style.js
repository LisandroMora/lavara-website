import styled from "@emotion/styled";

export const OpacityBg = styled.div`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 30px;
	position: ${(props) => {
		switch (props.floating) {
			case "over":
				return "absolute";

			case "inside":
				return "fixed";

			default:
				return "initial";
		}
	}};

	display: flex;
	justify-content: center;
	align-items: center;
	${(props) => props.opacity && "background-color: rgba(0, 0, 0, 0.5);"}

	.card-message {
		padding: 50px 30px;
		background-color: var(--third-bg-color);
		width: 300px;
		min-height: 180px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		text-align: center;

		.title {
			font-size: 1.5rem;
			font-weight: 500;
			margin-bottom: 5px;
		}

		.message {
			font-size: 0.9rem;
			color: #999999;
		}

		.icon-box {
			width: 64px;
			height: 64px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 25px;
			.icon {
				width: 100%;
				height: 100%;
				color: ${(props) => props.color};
			}
		}
	}
`;

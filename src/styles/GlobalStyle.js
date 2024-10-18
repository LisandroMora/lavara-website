import { css, Global } from "@emotion/react";
import React from "react";

function GlobalStyle() {
	return (
		<Global
			styles={css`
				:root {
					/* Background Colors */
					--primary-bg-color: #4FC5D3;
					--secondary-bg-color: #EF467A;
					--tertiary-bg-color: #EED116;
					--fourth-bg-color: #DF2126;
					--fifth-bg-color: #F47D20;
					--sixth-bg-color: #F5F5F5;

					/* Text Colors */
					--primary-text-color: #ffffff;
					--secondary-text-color: #000000;

					/* Dashboard colors  */
					--d-primary-bg-color: #252646;
					--d-secondary-bg-color: #f5f5f5;
					--d-third-bg-color: #ffffff;
					--d-fourth-bg-color: #999999;
					
					--d-blue-color: #55b9ea;
					--d-purple-color: #8e55ea;
					--d-red-color: #ff5964;
					--d-green-color: #28a745;
					
					--d-primary-text-color: #999999;
					--d-secondary-text-color: #ffffff;
					--d-third-text-color: #444444;

					/* Fonts sizes */
					--font-small: clamp(0.6rem, 3vw, 0.8rem);
					--font-normal: clamp(0.8rem, 3vw, 1rem);
					--font-medium: clamp(1rem, 3vw, 1.25rem);
					--font-medium-large: clamp(1.1rem, 3vw, 1.4rem);
					--font-large: clamp(1.2rem, 3vw, 1.5rem);
					--font-xlarge: clamp(1.5rem, 3vw, 2rem);
					--font-xxlarge: clamp(3rem, 5vw, 4.5rem);
					--font-heading: clamp(5rem, 9vw, 8rem);

				}
				html {
					scroll-behavior: smooth;
					overflow-x: hidden;
				}
				body {
					margin: 0;
					padding: 0;
					overflow-x: hidden;

					box-sizing: border-box;
					font-family: "Knockout", -apple-system, BlinkMacSystemFont, Segoe UI,
						Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
						Helvetica Neue, sans-serif !important;
				}
				
				* {
					box-sizing: border-box;
					margin: 0;
					padding: 0;
				}

				.editor-class.rdw-editor-main {
					height: 100%;
					overflow-y: auto;
					background-color: var(--d-third-bg-color);
					padding: 10px;
				}

				.disable-no-access{
					pointer-events: none;
					opacity: 0.5;
				}

				.viewport {
					margin: 0 0 0 0;
					width: 100vw;
					overflow-x: hidden;
					position: absolute;
				}

				.copyright{
					text-align: center;
					font-size: 12px;
					font-family: "Avenir";
					padding-bottom: 20px;

					a{
						color: var(--fifth-bg-color);
						text-decoration: none;
					}
				}

				/* width */
				::-webkit-scrollbar {
					width: 10px;
				}

				/* Handle */
				::-webkit-scrollbar-thumb {
					background: var(--secondary-bg-color);
				}

				@font-face {
					font-family: "Knockout";
					src: url("/assets/fonts/Knockout.otf");
				}

				@font-face {
					font-family: "Avenir";
					src: url("/assets/fonts/Avenir.otf");
				}
			`}
		/>
	);
}

export default GlobalStyle;

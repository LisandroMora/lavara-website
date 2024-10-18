import React from 'react'
import Head from 'next/head'

export const CustomHead = ({
	title,
	description,
	image,
	keywords,
	canonical,
	url,
}) => {
	return (
		<Head>
			{/* <!-- Primary Meta Tags --> */}
			<title>
				{title
					? `${title} | La Vara | Adecc`
					: 'La Vara | Adecc'}
			</title>
			<meta
				name='title'
				content={
					title
						? `${title} La Vara | Adecc`
						: 'La Vara | Adecc'
				}
			/>
			<meta
				name='description'
				content={
					description
						? description
						: ''
				}
			/>
			<meta name='image' content={image ? image : '/assets/images/premios-bg.jpg'} />
			<meta
				name='keywords'
				content={
					``
				}
			/>

			<link rel='canonical' href={canonical ? canonical : ''} />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={url ? url : ''} />
			<meta
				property='og:title'
				content={
					title
						? `${title} La Vara | Adecc`
						: 'La Vara | Adecc'
				}
			/>
			<meta
				property='og:description'
				content={
					description
						? description
						: 'Premios La Vara: Celebrando la creatividad y la innovación en Centroamérica y el Caribe. Reconocemos las piezas más originales del año en la industria publicitaria.'
				}
			/>
			<meta
				property='og:image'
				content={image ? image : '/assets/images/premios-bg.jpg'}
			/>

			{/* <!-- Twitter --> */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={url ? url : ''} />
			<meta
				property='twitter:title'
				content={
					title
						? `${title} La Vara | Adecc`
						: 'La Vara | Adecc'
				}
			/>
			<meta
				property='twitter:description'
				content={
					description
						? description
						: 'Premios La Vara: Celebrando la creatividad y la innovación en Centroamérica y el Caribe. Reconocemos las piezas más originales del año en la industria publicitaria.'
				}
			/>
			<meta
				property='twitter:image'
				content={image ? image : '/assets/images/premios-bg.jpg'}
			/>
		</Head>
	)
}

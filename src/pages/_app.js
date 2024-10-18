import { AuthContextProvider } from "@dashboard/context/AuthContext";
import { ImageVisualizerProvider } from "src/web/contexts/ImageVisualizer";
import '../../i18n';
import { appWithTranslation } from 'next-i18next';
import { LanguageProvider } from "@contexts/LanguageContext";

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<ImageVisualizerProvider>
				<LanguageProvider>
					<Component {...pageProps} />
				</LanguageProvider>
			</ImageVisualizerProvider>
		</AuthContextProvider>
	)
}

export default appWithTranslation(MyApp);

import MainBanner from "@components/Banners/Main/Index";
import FloatingButton from "@components/FloatingButton/Index";
import JudgesSection from "@components/Judges/Index";
import AwardsSection from "@components/Sections/Home/AwardsSection";
import InfoSection from "@components/Sections/Home/InfoSection";
import MarketsSection from "@components/Sections/Home/MarketsSections";
import SponsorsSection from "@components/Sections/Home/SponsorsSection";
import VaraTalksSection from "@components/Sections/Home/VaraTalksSection";
import WinnersSection from "@components/Sections/Home/WinnersSection";
import WebLayout from "@layouts/web-layout";
import { CustomHead } from "src/components/CustomHead";

function HomePage() {
	return (
		<WebLayout>
			<CustomHead />
			<FloatingButton />
			<MainBanner />
			<InfoSection />
			<VaraTalksSection />
			<WinnersSection />
			<JudgesSection />
			<MarketsSection />
			<SponsorsSection />
		</WebLayout>
	);
}

export default HomePage;

export async function getServerSideProps() {
	try {
		return {
			props: {
				posts: [],
			},
		};
	}
	catch (error) {
		console.log({error});
		return {
			props: {
				posts: [],
			},
		};
	}
}


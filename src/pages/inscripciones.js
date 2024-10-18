import InscriptionsBanner from "@components/Banners/Inscription/Index";
import Categories from "@components/Categories/Index";
import JudgesSection from "@components/Judges/Index";
import AccordionsSection from "@components/Sections/Inscription/AccordionsSection";
import FasesSection from "@components/Sections/Inscription/FasesSection";
import InscriptionsInfo from "@components/Sections/Inscription/Info";
import Participants from "@components/Sections/Inscription/Participants";
import WebLayout from "@layouts/web-layout";
import { CustomHead } from "src/components/CustomHead";

function Inscripciones() {
	return (
		<WebLayout>
			<CustomHead />
            <InscriptionsBanner />
			<FasesSection />
			<InscriptionsInfo />
			<Participants />
			<JudgesSection />
			<Categories />
			<AccordionsSection />
		</WebLayout>
	);
}

export default Inscripciones;

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


import EstudiantesBanner from "@components/Banners/Estudiantes/Index";
import FasesSection from "@components/Sections/Inscription/FasesSection";
import AccordionsSection from "@components/Sections/Students/AccordionsSection";
import StudentsInfo from "@components/Sections/Students/Info";
import PriceBanner from "@components/Sections/Students/PriceBanner";
import StudentsWinners from "@components/Sections/Students/Winners";
import WebLayout from "@layouts/web-layout";
import { CustomHead } from "src/components/CustomHead";

const Fases = [
	{
		name: "INSCRIPCIONES",
		date: "15 JUL - 10 OCT",
		number: 1,
	},
	{
		name: "SHORTLIST",
		date: "OCTUBRE",
		number: 2,
	},
	{
		name: "FINALISTAS",
		date: "27 NOV",
		number: 3,
	},
];

function Inscripciones() {
	return (
		<WebLayout>
			<CustomHead />
            <EstudiantesBanner />
			<FasesSection fases={Fases} />
            <StudentsInfo />
			<StudentsWinners />
            <PriceBanner />
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


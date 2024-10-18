
// import PostsSection from "@blogComponents/PostsSection/Index";
import postsFilterService from "@blogServices/getPostsFilter";
import WebLayout from "@layouts/web-layout";
// import Banner from "src/web/components/Banner/Index";

function Index({ Posts, error, pagination }) {
	return (
		<WebLayout>
			{/* <Banner
				title="Blog"
				image_path="/assets/images/Blog/blog_banner.png"
			/>
			{!error && Posts ? (
				<>
					<PostsSection posts={Posts} />
					<Pagination info={pagination} />
				</>
			) : (
				<h2>Error al obtener los datos</h2>
			)} */}
		</WebLayout>
	);
}

export default Index;

export async function getServerSideProps({ query }) {
	try {
		const {data: resPosts, pagination} = await postsFilterService({ page: query?.page });
		return {
			props: {
				Posts: resPosts.length ? resPosts : [],
				pagination,
				error: false,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				Posts: [],
				pagination: {},
				error: true,
			},
		};
	}
}
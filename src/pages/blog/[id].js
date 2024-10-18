import ContainerDetail from "@blogComponents/PostDetails/Index";
import PostHeader from "@blogComponents/PostHeader";
import postService from "@blogServices/getPost.service";
import WebLayout from "@layouts/web-layout";
// import CardContainer from "@commonComponents/NewsCard/CardContainer";

const Post = ({ Post }) => {
	return (
		<WebLayout>
			<PostHeader image={Post?.imageUrl} title={Post?.title} />
			<ContainerDetail post={Post} />
		</WebLayout>
	);
};

export default Post;

export async function getServerSideProps({ query }) {
	try {
		const resPosts = await postService({ id: query.id });
		return {
			props: {
				Post: resPosts.post,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				error: true,
			},
		};
	}
}

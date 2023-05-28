import { useEffect } from "react";
import PostLayout from "../../Layout/PostLayout/PostLayout";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useRouter } from "next/router";

import {searchPost, searchLatest, searchPostsBasedOnCategory, searchRecommendedPosts, searchLatestPodcast,fetchPostsHelper} from "../../helpers/api-util.js";

function NewsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const router = useRouter();

  useEffect(() => {}, [router.isReady]);

  const newsId = router.query.newsId;

  <PostLayout {...props} type="FULLPOST" postId={newsId} />

  // return newsId ? (
  //   <PostLayout {...props} type="FULLPOST" postId={newsId} />
  // ) : (
  //   <Spinner />
  // );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       newsId:
//         "ow-paris-gondo-the-life-saving-magic-of-inventorying-is-fully-illustrated",
//     },
//   };
// }

// export async function getStaticProps() {

//   const fetchedPosts = await fetchPostsHelper();

//   return {
//     props: {
//       posts: fetchedPosts.posts,
//       news: fetchedPosts.news,
//       podcast: fetchedPosts.podcast,
//       gondo: fetchedPosts.gondo,
//       introGondo: fetchedPosts.introGondo,
//       about: fetchedPosts.about,
//       theTeam: fetchedPosts.theTeam,
//       comingSoon: fetchedPosts.comingSoon
//     },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           newsId:
//             "now-paris-gondo-the-life-saving-magic-of-inventorying-is-fully-illustrated",
//         },
//       },
//     ],
//     fallback: "blocking",
//   };
// }

export default NewsPage;

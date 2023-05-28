import { useEffect } from "react";
import PostLayout from "../Layout/PostLayout/PostLayout";
import Spinner from "../components/UI/Spinner/Spinner";
import { useRouter } from "next/router";

import { fetchPostsHelper } from "../helpers/api-util.js";

function PodcastPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const router = useRouter();

  useEffect(() => {}, [router.isReady]);

  const filterData = router.query.podcastId;

  // if (!filterData) {
  //   return <Spinner />;
  // }

  const podcastYear = filterData[0];
  const podcastMonth = filterData[1];
  const podcastDay = filterData[2];
  const podcastId = filterData[3];

  return <PostLayout {...props} type="FULLPOST" postId={podcastId} />;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       podcastId:
//       {
//         podcastYear: "2020",
//         podcastMonth: "12",
//         podcastDay: "28",
//         podcastId:
//           "the-rolistes-present-metatopia-ttrpgs-english-as-our-vehicular-language-beyond-the-american-culture-online",
//       },
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
//       comingSoon: fetchedPosts.comingSoon,
//     },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           podcastId: [
//             "2020",
//             "12",
//             "28",
//             "the-rolistes-present-metatopia-ttrpgs-english-as-our-vehicular-language-beyond-the-american-culture-online",
//           ],
//         },
//       },
//     ],
//     fallback: "blocking",
//   };
// }

export default PodcastPage;

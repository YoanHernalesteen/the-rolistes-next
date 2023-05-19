import { useEffect } from "react";
import PostLayout from "../../Layout/PostLayout/PostLayout";
import { useRouter } from "next/router";

function NewsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const router = useRouter();
  const newsId = router.query.newsId;
  const postId = newsId;

  return <PostLayout {...props} type="FULLPOST" postId={newsId}/>;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       events: "Podcast list",
//     },
//     revalidate: 1800
//   };
// }

export default NewsPage;

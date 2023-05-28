import { useEffect } from "react";
import PostLayout from "../../Layout/PostLayout/PostLayout";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useRouter } from "next/router";

import {
  searchPost,
  searchLatest,
  searchPostsBasedOnCategory,
  searchRecommendedPosts,
  searchLatestPodcast,
  fetchPostsHelper,
} from "../../helpers/api-util.js";

function NewsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const router = useRouter();

  useEffect(() => {}, [router.isReady]);

  const newsId = router.query.newsId;

  <PostLayout {...props} type="FULLPOST" />;

  // return newsId ? (
  //   <PostLayout {...props} type="FULLPOST" postId={newsId} />
  // ) : (
  //   <Spinner />
  // );
}

export async function getStaticProps(context) {
  const pageTitle = context.params.newsId;
  const fs = require("fs");
  const path = require("path");
  const dataToProcess = fs.readFileSync(
    path.join(process.cwd(), "therolistespodcast.xml")
  );

  const fetchedPosts = await fetchPostsHelper(dataToProcess);

  let key = 0;
  let fullPost =[];
  let fullPostType ="";

  key = searchPost(fetchedPosts.podcast, pageTitle);

  if (key >= 0) {
    fullPost = fetchedPosts.podcast[key]; 
    fullPostType   = "PODCAST";
  } else {
    key = searchPost(fetchedPosts.news, pageTitle);
    fullPost = fetchedPosts.news[key];
    fullPostType   = "NEWS";
  }

  console.log(fullPost);

  return {
    props: {
      fullPost: fullPost,
      fullPostType : fullPostType,
      newsId: newsId,
      news: fetchedPosts.news,
      gondo: fetchedPosts.gondo,
    },
  };
}

export async function getStaticPaths() {
  const pageTitle = context.params.newsId;
  const fs = require("fs");
  const path = require("path");
  const dataToProcess = fs.readFileSync(
    path.join(process.cwd(), "therolistespodcast.xml")
  );
  const fetchedPosts = await fetchPostsHelper(dataToProcess);

  const paths = fetchedPosts.map((fetchedPost) => ({
    params: { fetchedPostId: fetchedPost.postId },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default NewsPage;

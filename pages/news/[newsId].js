import { useEffect } from "react";
import PostLayout from "../../Layout/PostLayout/PostLayout";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useRouter } from "next/router";

import {
  searchPost,
  searchLatest,
  searchRecommendedPosts,
  fetchPostsHelper,
} from "../../helpers/api-util.js";

function NewsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const router = useRouter();

  useEffect(() => {}, [router.isReady]);

  return <PostLayout {...props} type="FULLPOST" />;

  // return newsId ? (
  //   <PostLayout {...props} type="FULLPOST" postId={newsId} />
  // ) : (
  //   <Spinner />
  // );
}

async function getData(){

  const fs = require("fs");
  const path = require("path");
  const dataToProcess = await fs.readFileSync(
    path.join(process.cwd(), "therolistespodcast.xml")
  );
  const fetchedPosts = await fetchPostsHelper(dataToProcess);

  return fetchedPosts;
}

export async function getStaticProps(context) {
  const pageTitle = context.params.newsId;
  
  const fetchedPosts = await getData();

  // console.log(pageTitle);
 
  const key = await searchPost(fetchedPosts.news, pageTitle);
  const fullPost = fetchedPosts.news[key];
  const fullPostType = "FULLPOST";
  const recommendedPosts = await searchRecommendedPosts(
    fetchedPosts.news[key],
    fetchedPosts.podcast
  );
  const recentPosts = await searchLatest(fetchedPosts.podcast, 2);
  // console.log(fullPost);
  if (!fullPost) {
    return { notFound: true };
  }

  return {
    props: {
      recommendedPosts: recommendedPosts,
      recentPosts: recentPosts,
      fullPost: fullPost,
      type: fullPostType,
      fullPostType: fullPostType
    },
  };
}

export async function getStaticPaths() {

  const fetchedPosts = await getData(); 

  const ids = fetchedPosts.news.map(news =>news["wp:post_name"][0]);
  const pathsWithParams = ids.map(id=>({params:{newsId:id}}));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export default NewsPage;

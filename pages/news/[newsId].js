import { useEffect } from "react";
import PostLayout from "../../Layout/PostLayout/PostLayout";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useRouter } from "next/router";

import {
  searchPost,
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


  let key = 0;
  let fullPost =[];
  let fullPostType ="";

  key = await searchPost(fetchedPosts.podcast, pageTitle);

  if (key >= 0) {
    fullPost = fetchedPosts.podcast[key]; 
    fullPostType   = "PODCAST";
  } else {
    key = searchPost(fetchedPosts.news, pageTitle);
    fullPost = fetchedPosts.news[key];
    fullPostType   = "NEWS";
  }

  if (!fullPost) {
    return { notFound: true };
  }

  return {
    props: {
      fullPost: fullPost,
      fullPostType : fullPostType
    },
  };
}

export async function getStaticPaths() {
   // postName: props.news[key]["wp:post_name"][0]

  const fetchedPosts = await getData();  

  const ids = fetchedPosts.news.map(news => news["wp:post_name"][0]);
  const pathsWithParams = ids.map(id=>({params:{newsId:id}}));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export default NewsPage;

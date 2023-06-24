import { useEffect } from "react";
import PostLayout from "../Layout/PostLayout/PostLayout";
import Spinner from "../components/UI/Spinner/Spinner";
import { useRouter } from "next/router";

import {
  searchPost,
  searchLatest,
  searchRecommendedPosts,
  fetchPostsHelper,
} from "../helpers/api-util.js";

function PodcastPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const router = useRouter();

  useEffect(() => {}, [router.isReady]);

  // if (!filterData) {
  //   return <Spinner />;
  // }

  return <PostLayout {...props} type="FULLPOST" />;
}

async function getData() {
  const fs = require("fs");
  const path = require("path");
  const dataToProcess = await fs.readFileSync(
    path.join(process.cwd(), "therolistespodcast.xml")
  );
  const fetchedPosts = await fetchPostsHelper(dataToProcess);

  return fetchedPosts;
}

export async function getStaticProps(context) {
  const podcastId = context.params.podcastId;
  const podcastTitle = podcastId[3];

  const fetchedPosts = await getData();

  const key = await searchPost(fetchedPosts.podcast, podcastTitle);
  const fullPost = fetchedPosts.podcast[key];
  const fullPostType = "FULLPOST";
  const recommendedPosts = await searchRecommendedPosts(
    fetchedPosts.podcast[key],
    fetchedPosts.podcast
  );
  const recentPosts = await searchLatest(fetchedPosts.podcast, 2);

  if (!fullPost) {
    return { notFound: true };
  }

  return {
    props: {
      recommendedPosts: recommendedPosts,
      recentPosts: recentPosts,
      fullPost: fullPost,
      type: fullPostType,
      fullPostType: fullPostType,
    },
  };
}

export async function getStaticPaths() {
  const fetchedPosts = await getData();

  const ids = fetchedPosts.podcast.map((podcast) => {
    const tempDate = new Date(podcast["pubDate"][0]);
    const year = String(tempDate.getFullYear());
    const month = String(tempDate.getMonth() + 1);
    const day = String(tempDate.getDate());
    return [year, month, day, podcast["wp:post_name"][0]];
  });

  // console.log(ids);
  const pathsWithParams = ids.map((id) => ({
    params: {
      podcastId: [id[0], id[1], id[2], id[3]],
    },
  }));

  return {
    paths: pathsWithParams,
    fallback: "blocking",
  };
}

export default PodcastPage;

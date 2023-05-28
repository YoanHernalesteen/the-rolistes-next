import { useEffect } from "react";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import {
  searchLatest,
  searchLatestPodcast,
  fetchPostsHelper,
} from "../helpers/api-util.js";

function HomePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <HomeLayout {...props} />;
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const dataToProcess = fs.readFileSync(
    path.join(process.cwd(), "therolistespodcast.xml")
  );

  const fetchedPosts = await fetchPostsHelper(dataToProcess);
  const latestNews = await searchLatest(fetchedPosts.news, 5);
  const latestPodcast = await searchLatestPodcast(fetchedPosts.podcast, 5);
  const latestComingSoon = fetchedPosts.comingSoon[0];

  return {
    props: {
      latestNews: latestNews,
      latestPodcast: latestPodcast,
      latestComingSoon: latestComingSoon,
    },
  };
}

export default HomePage;

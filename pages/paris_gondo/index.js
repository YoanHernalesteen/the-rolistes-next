import { useEffect } from "react";
import GondoLayout from "../../Layout/GondoLayout/GondoLayout";

import {
  searchLatest,
  searchLatestPodcast,
  fetchPostsHelper,
} from "../../helpers/api-util.js";

function GondoPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <GondoLayout {...props} />;
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

  return {
    props: {
      introGondo: fetchedPosts.introGondo,
      gondo: fetchedPosts.gondo,
      latestNews: latestNews,
      latestPodcast: latestPodcast,
    },
  };
}

export default GondoPage;

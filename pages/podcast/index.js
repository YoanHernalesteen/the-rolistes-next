import { useEffect } from "react";
import PodcastLayout from "../../Layout/PodcastLayout/PodcastLayout";

import {
  fetchPostsHelper,
} from "../../helpers/api-util.js";

function PodcastListPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <PodcastLayout  {...props}/>;
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const dataToProcess = fs.readFileSync(
    path.join(process.cwd(), "therolistespodcast.xml")
  );

  const fetchedPosts = await fetchPostsHelper(dataToProcess);

  return {
    props: {
      podcast: fetchedPosts.podcast
    },
  };
}

export default PodcastListPage;

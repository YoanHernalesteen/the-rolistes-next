import { useEffect } from "react";
import PodcastLayout from "../../Layout/PodcastLayout/PodcastLayout";

import { fetchPostsHelper,searchPostsBasedOnCategory } from "../../helpers/api-util.js";

function PodcastListPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <PodcastLayout {...props} />;
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const dataToProcess = fs.readFileSync(
    path.join(process.cwd(), "therolistespodcast.xml")
  );

  const fetchedPosts = await fetchPostsHelper(dataToProcess);
  const allPodcast = await searchPostsBasedOnCategory(
    fetchedPosts.podcast,
    "podcast"
  );
  const rolistesPodcast = await searchPostsBasedOnCategory(
    fetchedPosts.podcast,
    "the-rolistes-podcast"
  );
  const rolistesPresent = await searchPostsBasedOnCategory(
    fetchedPosts.podcast,
    "the-rolistes-present"
  );
  const cafeRolistes = await searchPostsBasedOnCategory(
    fetchedPosts.podcast,
    "cafe-rolistes"
  );
  const filmStudies = await searchPostsBasedOnCategory(
    fetchedPosts.podcast,
    "film-studies"
  );

  const currentCategorySize = allPodcast.length;
  
  return {
    props: {
      podcast: allPodcast,
      rolistesPodcast: rolistesPodcast,
      rolistesPresent: rolistesPresent,
      cafeRolistes: cafeRolistes,
      filmStudies: filmStudies,
      currentCategorySize: currentCategorySize
    },
  };
}

export default PodcastListPage;

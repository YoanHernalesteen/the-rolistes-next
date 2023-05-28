import { useEffect } from "react";
import GondoLayout from "../../Layout/GondoLayout/GondoLayout";

import {fetchPostsHelper} from "../../helpers/api-util.js";

function GondoPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <GondoLayout {...props}/>;
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
      posts: fetchedPosts.posts,
      news: fetchedPosts.news,
      podcast: fetchedPosts.podcast,
      gondo: fetchedPosts.gondo,
      introGondo: fetchedPosts.introGondo,
      about: fetchedPosts.about,
      theTeam: fetchedPosts.theTeam,
      comingSoon: fetchedPosts.comingSoon
    },
  };
}

export default GondoPage;

import { useEffect } from "react";
import AboutUsLayout from "../../Layout/AboutUsLayout/AboutUsLayout";

import {
  fetchPostsHelper,
} from "../../helpers/api-util.js";

function AboutPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <AboutUsLayout {...props} />;
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
      about: fetchedPosts.about,
      theTeam: fetchedPosts.theTeam,
    },
  };
}

export default AboutPage;

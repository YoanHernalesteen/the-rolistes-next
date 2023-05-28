import { useEffect } from "react";
import NewsLayout from "../../Layout/NewsLayout/NewsLayout";

import {
  fetchPostsHelper,
} from "../../helpers/api-util.js";

function NewsListPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <NewsLayout {...props} />;
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
      news: fetchedPosts.news,
    },
  };
}

export default NewsListPage;

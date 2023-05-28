import { useEffect } from "react";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import { fetchPostsHelper } from "../helpers/api-util.js";

function HomePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <HomeLayout
      posts={props.posts}
      news={props.news}
      podcast={props.podcast}
      gondo={props.gondo}
      introGondo={props.introGondo}
      about={props.about}
      theTeam={props.theTeam}
      comingSoon={props.comingSoon}
    />

    // <HomeLayout {...props}/>
  );
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
      comingSoon: fetchedPosts.comingSoon,
    },
  };
}

export default HomePage;

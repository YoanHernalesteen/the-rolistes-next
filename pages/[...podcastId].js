import { useEffect } from "react";
import PostLayout from "../Layout/PostLayout/PostLayout";
import Spinner from "../components/UI/Spinner/Spinner";
import { useRouter } from "next/router";

function PodcastPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const router = useRouter();

  useEffect(() => {}, [router.isReady]);

  const filterData = router.query.podcastId;

  if (!filterData) {
    return <Spinner />;
  }

  const podcastYear = filterData[0];
  const podcastMonth = filterData[1];
  const podcastDay = filterData[2];
  const podcastId = filterData[3];

  return <PostLayout {...props} type="FULLPOST" postId={podcastId} />;
}

export async function getStaticProps() {
  return {
    props: {
      podcastId:
      {
        podcastYear: "2020",
        podcastMonth: "12",
        podcastDay: "28",
        podcastId:
          "the-rolistes-present-metatopia-ttrpgs-english-as-our-vehicular-language-beyond-the-american-culture-online",
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          podcastId: ["2020",
             "12",
             "28",            
              "the-rolistes-present-metatopia-ttrpgs-english-as-our-vehicular-language-beyond-the-american-culture-online"
        ],
        },
      },
    ],
    fallback: "blocking",
  };
}

export default PodcastPage;

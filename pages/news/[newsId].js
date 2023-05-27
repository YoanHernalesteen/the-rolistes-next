import { useEffect } from "react";
import PostLayout from "../../Layout/PostLayout/PostLayout";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useRouter } from "next/router";

function NewsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const router = useRouter();

  useEffect(() => {}, [router.isReady]);

  const newsId = router.query.newsId;

  return newsId ? (
    <PostLayout {...props} type="FULLPOST" postId={newsId} />
  ) : (
    <Spinner />
  );
}

export async function getStaticProps() {
  return {
    props: {
      newsId:
        "ow-paris-gondo-the-life-saving-magic-of-inventorying-is-fully-illustrated",
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          newsId:
            "now-paris-gondo-the-life-saving-magic-of-inventorying-is-fully-illustrated",
        },
      },
    ],
    fallback: "blocking",
  };
}

export default NewsPage;

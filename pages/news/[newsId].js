import { useEffect } from "react";
import PostLayout from "../../Layout/PostLayout/PostLayout";
import Spinner from '../../components/UI/Spinner/Spinner';
import { useRouter } from "next/router";

function NewsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const router = useRouter();

  useEffect(() => {
  
  }, [router.isReady]);

  const newsId = router.query.newsId;

  return newsId ?  <PostLayout {...props} type="FULLPOST" postId={newsId} /> : <Spinner/>
}

export default NewsPage;

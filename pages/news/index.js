import { useEffect } from 'react';
import NewsLayout from "../../Layout/NewsLayout/NewsLayout";

function NewsListPage(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  },)

  return <NewsLayout />;

  }
  
  // export async function getStaticProps() {
  //   return {
  //     props: {
  //       events: "news list",
  //     },
  //     revalidate: 1800
  //   };
  // }
  
  export default NewsListPage;
  
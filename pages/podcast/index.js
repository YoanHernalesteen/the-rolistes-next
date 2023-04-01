import { useEffect } from 'react';
import PodcastLayout from "../../Layout/PodcastLayout/PodcastLayout";

function PodcastListPage(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  },)

  return <PodcastLayout />;
  }
  
  // export async function getStaticProps() {
  //   return {
  //     props: {
  //       events: "Podcast list",
  //     },
  //     revalidate: 1800
  //   };
  // }
  
  export default PodcastListPage;
  
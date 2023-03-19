import { useEffect } from 'react';

function PodcastListPage(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  },)

    return (
      <div>
        {props.events}
      </div>
    );
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
  
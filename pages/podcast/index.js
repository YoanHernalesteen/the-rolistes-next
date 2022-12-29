function PodcastListPage(props) {

    return (
      <div>
        {props.events}
      </div>
    );
  }
  
  export async function getStaticProps() {
    return {
      props: {
        events: "Podcast list",
      },
      revalidate: 1800
    };
  }
  
  export default PodcastListPage;
  
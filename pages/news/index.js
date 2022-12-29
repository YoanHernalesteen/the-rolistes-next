function NewsListPage(props) {

    return (
      <div>
        {props.events}
      </div>
    );
  }
  
  export async function getStaticProps() {
    return {
      props: {
        events: "news list",
      },
      revalidate: 1800
    };
  }
  
  export default NewsListPage;
  
function AboutPage(props) {

    return (
      <div>
        {props.events}
      </div>
    );
  }
  
  export async function getStaticProps() {
    return {
      props: {
        events: "about",
      },
      revalidate: 1800
    };
  }
  
  export default AboutPage;
  
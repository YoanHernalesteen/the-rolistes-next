function GondoPage(props) {

    return (
      <div>
        {props.events}
      </div>
    );
  }
  
  export async function getStaticProps() {
    return {
      props: {
        events: "Paris Gondo",
      },
      revalidate: 1800
    };
  }
  
  export default GondoPage;
  
function HomePage(props) {

  return (
    <div>
      {props.events}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      events: "featuredEvents",
    },
    revalidate: 1800
  };
}

export default HomePage;

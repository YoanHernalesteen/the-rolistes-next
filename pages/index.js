import { useEffect } from 'react';

function HomePage(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  },)

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

import { useEffect } from 'react';

function AboutPage(props) {

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
        events: "about",
      },
      revalidate: 1800
    };
  }
  
  export default AboutPage;
  